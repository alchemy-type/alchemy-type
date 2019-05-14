import passageApi from '../services/passage-api.js';
import createPassageLink from './create-passage-link.js';

const passagesParent = document.getElementById('passage-list');
const passages = passageApi.getAll();

for(let i = 0; i < passages.length; i++) {
    const passage = passages[i];
    const link = createPassageLink(passage);
    passagesParent.appendChild(link);
}
