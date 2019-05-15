import createSpans from './create-spans.js';
import handleMatchFlag from './handle-match-flag.js';
import handleCurrentChar from './handle-current-char.js';
import handleErrorChar from './handle-error-char.js';
import checkEndGame from './checkEndGame.js';
import passageApi from '../services/passage-api.js';
import { stopWatch, reset } from '../services/stop-watch.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');
let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get('id');

const passage = passageApi.get(passageId);

const passageText = passage.text;
createSpans(passageText, passageParent);
const passageArray = Array.from(passageText);
let emptyArray = [];

let userInputLength = 0;
let matchFlag = true;
let gameOver = false;
let enterFlag = false;

let timer = null;

let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

userInput.addEventListener('input', (event) => {
    emptyArray.push(event.target.value);
    userInputLength = emptyArray.length;
    if(userInputLength === 1) {
        timer = setInterval(stopWatch, 1000);
    }
    userInput.value = '';
    gameOver = checkEndGame(passageArray, emptyArray);

    if(!gameOver) {
        currentChar = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength);
    } else {
        clearInterval(timer);
    }

    if(enterFlag && matchFlag) {
        emptyArray = handleEnter(userInputLength, passageArray, emptyArray, userInput);
        userInputLength = emptyArray.length;
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
    }

    enterFlag = false;
});

userInput.addEventListener('keydown', event => {
    if(event.code === 'Enter') {
        enterFlag = true;
    } else if(event.code === 'Backspace') {
        emptyArray.pop();
        userInputLength = emptyArray.length;
        if(userInputLength === 0) {
            reset();
            clearInterval(timer);
            minutesLabel.textContent = '00';
            secondsLabel.textContent = '00';
        }
        currentChar.classList.remove('typed');
        currentChar = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength);
    }

    if((!matchFlag && event.code !== 'Backspace') || gameOver) {
        event.preventDefault();
    }
});

userInput.addEventListener('blur', () => {
    userInput.focus();
});

function handleEnter(userInputLength, passageArray, emptyArray) {
    while(passageArray[userInputLength] === ' ' || passageArray[userInputLength] === '\n') {
        if(passageArray[userInputLength] === ' ') {
            emptyArray.push(' ');
        } else {
            emptyArray.push('\n');
        }
        userInputLength++;
    }

    return emptyArray;
}

function handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength) {
    matchFlag = handleMatchFlag(emptyArray, passageArray, userInputLength);
    if(matchFlag) {
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
    }
    handleErrorChar(matchFlag, passageParent, currentChar, userInputLength);
    return currentChar;
}