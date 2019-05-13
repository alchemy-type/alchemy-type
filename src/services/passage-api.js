const passageApi = {
    key: 'passage',
    save(passage) {
        const passageData = JSON.stringify(passage);
        localStorage.setItem(passageApi.key, passageData);
    },
    getAll() {
        const passageData = localStorage.getItem(passageApi.key);
        const passage = JSON.parse(passageData);
        return passage;
    }
};

export default passageApi;