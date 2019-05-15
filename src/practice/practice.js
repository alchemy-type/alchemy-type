import createSpans from './create-spans.js';
import handleMatchFlag from './handle-match-flag.js';
import handleCurrentChar from './handle-current-char.js';
import handleErrorChar from './handle-error-char.js';
import checkEndGame from './checkEndGame.js';
import passageApi from '../services/passage-api.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get('id');

const passage = passageApi.get(passageId);

const passageText = passage.text;
createSpans(passageText, passageParent);
const passageArray = Array.from(passageText);
let emptyArray = Array(passageText.length);

let userInputLength = 0;
let matchFlag = true;
let gameOver = false;
let enterFlag = false;

// Disallow end, home and arrow keys
const notAllowedKeys = [35, 36, 37, 38, 39, 40];

let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

userInput.addEventListener('input', (event) => {
    userInputLength = event.target.value.length;
    emptyArray[userInputLength - 1] = event.target.value[userInputLength - 1];
    gameOver = checkEndGame(passageArray, emptyArray);
    if(!gameOver) {
        matchFlag = handleMatchFlag(emptyArray, passageArray, userInputLength);
        if(matchFlag) {
            currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
        }
        handleErrorChar(matchFlag, passageParent, currentChar, userInputLength);
    }
    if(enterFlag) {
        emptyArray = handleEnter(userInputLength, passageArray, emptyArray, userInput);
        userInputLength = event.target.value.length;
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
        enterFlag = false;
    }
});

userInput.addEventListener('keydown', event => {
    if(event.code === 'Enter') {
        enterFlag = true;
    }
    if((!matchFlag && event.code !== 'Backspace') || gameOver || notAllowedKeys.includes(event.which)) {
        event.preventDefault();
    }
});

userInput.addEventListener('blur', () => {
    userInput.focus();
});

function handleEnter(userInputLength, passageArray, emptyArray, userInput) {
    while(passageArray[userInputLength] === ' ' || passageArray[userInputLength] === '\n') {
        if(passageArray[userInputLength] === ' ') {
            emptyArray[userInputLength] = ' ';
            userInput.value = userInput.value + ' ';
        } else {
            emptyArray[userInputLength] = '\n';
            userInput.value = userInput.value + '\n';
        }
        userInputLength++;
    }

    return emptyArray;
}