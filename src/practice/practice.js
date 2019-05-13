import passages from '../services/passage-data.js';
import createSpans from './create-spans.js';

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
    emptyArray[userInputLength] = event.target.value[userInputLength];
    userInputLength = event.target.value.length;
    if(emptyArray[userInputLength - 1] !== passageArray[userInputLength - 1]) {
        matchFlag = false;
    } else {
        matchFlag = true;
    }
});

userInput.addEventListener('keydown', event => {
    if(!matchFlag && event.code !== 'Backspace') {
        event.preventDefault();
    }
});
