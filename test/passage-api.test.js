const test = QUnit.test;
QUnit.module('passage-api');

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

const key = 'test-passages';
passageApi.key = key;



test('Test saving a passage', assert => {
    localStorage.removeItem(key);
    //Arrange
    const passage = {
        id: 'passage',
        title: 'Passage Title',
        text: 'This is a test passage.\nThis is a second line'
    };
    //Act 
    passageApi.save(passage);
    const result = passageApi.getAll();
    //Assert
    assert.deepEqual(result, passage);
});