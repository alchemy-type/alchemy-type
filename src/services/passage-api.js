import findById from './find-by-id.js';

const passageApi = {
    key: 'passage',
    save(passage) {
        let passages = passageApi.getAll();
        passages.push(passage);
        const passageData = JSON.stringify(passages);
        localStorage.setItem(passageApi.key, passageData);
    },
    get(id) {
        const passages = passageApi.getAll();
        return findById(passages, id);
    },
    getAll() {
        const passageData = localStorage.getItem(passageApi.key);
        let passages = JSON.parse(passageData);
        if(!passages) {
            passages = [];
        }
        return passages;
    }
};

export default passageApi;