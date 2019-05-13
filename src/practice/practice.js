import passages from '../services/passage-data.js';
import createSpans from './create-spans.js';

let passageParent = document.getElementById('passage-characters');

const passage = passages[0];
const passageText = passage.text;
createSpans(passageText, passageParent);

const passageArray = Array.from(passageText);


