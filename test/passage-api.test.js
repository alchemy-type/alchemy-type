import passageApi from '../src/services/passage-api.js';

const test = QUnit.test;
QUnit.module('passage-api');

const key = 'test-passages';
passageApi.key = key;

test('Test saving a passage and get it back', assert => {
    localStorage.removeItem(key);
    //Arrange
    const passage = {
        id: 'JavaScriptpassage',
        language: 'JavaScript',
        title: 'Passage Title',
        text: 'This is a test passage.\nThis is a second line'
    };
    //Act 
    passageApi.save(passage);
    const result = passageApi.get(passage.id);
    //Assert
    assert.deepEqual(result, passage);
});