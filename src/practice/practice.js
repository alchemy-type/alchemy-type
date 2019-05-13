import passages from '../services/passage-data.js';
import createSpans from './create-spans.js';
import handleMatchFlag from './handle-match-flag.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');

const passage = passages[0];
const passageText = passage.text;
createSpans(passageText, passageParent);

const passageArray = Array.from(passageText);
const emptyArray = Array(passageText.length);

let userInputLength = 0;
let matchFlag = true;

userInput.addEventListener('input', (event) => {
    userInputLength = event.target.value.length;
    emptyArray[userInputLength - 1] = event.target.value[userInputLength - 1];
    matchFlag = handleMatchFlag(emptyArray, passageArray, userInputLength);
});

userInput.addEventListener('keydown', event => {
    if(!matchFlag && event.code !== 'Backspace') {
        event.preventDefault();
    }
});
