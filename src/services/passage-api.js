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
        for(let i = 0; i < passages.length; i++) {
            let passage = passages[i];
            if(passage.id === id) {
                return passage;
            }
        }
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