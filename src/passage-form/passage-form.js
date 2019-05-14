import makePassage from './make-passage.js';
import passageApi from '../services/passage-api.js';

const passageForm = document.getElementById('passage-form');

passageForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(passageForm);
    formData.set('date', Date.now());
    const passage = makePassage(formData);
    console.log(passage.text);
    const splitPassage = passage.text.split('\n');
    console.log(splitPassage);
    passageApi.save(passage);
});