import templatePassages from '../services/passage-data.js';
import passageApi from '../services/passage-api.js';
import createPassageLink from './create-passage-link.js';

const passagesParent = document.getElementById('passage-list');

let passages = passageApi.getAll();
let templateArray = [];

for(let i = 0; i < templatePassages.length; i++) {
    const templatePassage = templatePassages[i];

    if(!passageApi.get(templatePassage.id)) {
        templateArray.push(templatePassage);
        passageApi.save(templatePassage);
    }
}

passages = templateArray.concat(passages);

for(let i = 0; i < passages.length; i++) {
    const passage = passages[i];
    const link = createPassageLink(passage);
    passagesParent.appendChild(link);
}
