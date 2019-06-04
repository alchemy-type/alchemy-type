import passageApi from '../src/services/passage-api.js';

const test = QUnit.test;
QUnit.module('passage-api');

const key = 'test-passages';
passageApi.key = key;

test('Test saving a passage and get it back', assert => {
    localStorage.removeItem(key);
    //Arrange
    let date = Date.now();
    const passage1 = {
        id: 'passage1' + date,
        description: 'Test passage 1',
        language: 'JavaScript',
        title: 'Passage Title',
        content: 'This is a test passage.\nThis is a second line',
        date: date
    };
    const passage2 = {
        id: 'passage2' + date,
        description: 'Test passage 2',
        language: 'JavaScript',
        title: 'Passage Title',
        content: 'This is a test passage.\nThis is a second line',
        date: date
    };
    const passage3 = {
        id: 'passage3' + date,
        description: 'Test passage 3',
        language: 'JavaScript',
        title: 'Passage Title',
        content: 'This is a test passage.\nThis is a second line',
        date: date
    };
    //Act 
    passageApi.save(passage1);
    passageApi.save(passage2);
    passageApi.save(passage3);
    const result = passageApi.get(passage2.id);
    //Assert
    assert.deepEqual(result, passage2);
});