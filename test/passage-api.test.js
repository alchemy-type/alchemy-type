import passageApi from '../src/services/passage-api.js';

const test = QUnit.test;
QUnit.module('passage-api');

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