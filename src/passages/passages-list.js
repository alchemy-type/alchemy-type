import passageApi from '../services/passage-api.js';

const passagesParent = document.getElementById('passage-list');
const passages = passageApi.getAll();

for(let i = 0; i < passages.length; i++) {
    const passage = passages[i];
    const section = document.createElement('section');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('id', passage.id);
    link.href = 'passage-list.html?' + searchParams.tostring();

    section.textContent = passage.title;
    passagesParent.appendChild(section);
}

