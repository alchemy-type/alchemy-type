import passages from '../services/passage-data.js';

const passageParent = document.getElementById('passage-characters');

const passage = passages[0];
const passageText = passage.text;

const passageArray = Array.from(passageText);

