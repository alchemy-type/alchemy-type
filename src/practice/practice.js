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
const emptyArray = Array(passageText.length);

let userInputLength = 0;
let matchFlag = true;
let gameOver = false;

let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

userInput.addEventListener('input', (event) => {
    userInputLength = event.target.value.length;
    emptyArray[userInputLength - 1] = event.target.value[userInputLength - 1];
    gameOver = checkEndGame(passageArray, emptyArray);
    if(!gameOver) {
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
        matchFlag = handleMatchFlag(emptyArray, passageArray, userInputLength);
        handleErrorChar(matchFlag, passageParent, currentChar, userInputLength);
    }
});

userInput.addEventListener('keydown', event => {
    if((!matchFlag && event.code !== 'Backspace') || gameOver) {
        event.preventDefault();
    }
});

userInput.addEventListener('blur', () => {
    userInput.focus();
});