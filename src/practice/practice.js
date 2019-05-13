import passages from '../services/passage-data.js';
import createSpans from './create-spans.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');

const passage = passages[0];
const passageText = passage.text;
createSpans(passageText, passageParent);

const passageArray = Array.from(passageText);
const emptyArray = Array(passageText.length);

let userInputCharaters = 0;

userInput.addEventListener('input', (event) => {
    emptyArray[userInputCharaters] = event.target.value[userInputCharaters];
    userInputCharaters = event.target.value.length;
});