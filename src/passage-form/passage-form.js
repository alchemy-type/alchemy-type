import makePassage from './make-passage.js';
import passageApi from '../services/passage-api.js';

const passageForm = document.getElementById('passage-form');

passageForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(passageForm);
    formData.set('date', Date.now());
    const passage = makePassage(formData);
    passageApi.save(passage);
});