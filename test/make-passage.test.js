import passageApi from '../src/services/passage-api.js';

const test = QUnit.test;
QUnit.module('make passage');

test('Test saving a passage and get it back', assert => {
    //Arrange
    const passage = {
        id: 'JavaScriptpassage',
        language: 'JavaScript',
        title: 'Passage Title',
        text: 'This is a test passage.\nThis is a second line'
    };

    const formData = new FormData();
    formData.set('id', passage.id);
    formData.set('language', passage.language);
    formData.set('title', passage.title);
    formData.set('text', passage.text);

    //Act 
    passageApi.save(passage);
    const result = getPassage(formData);
    //Assert
    assert.deepEqual(result, passage);
});

function getPassage(formData) {
    const passage = {
        id: formData.get('id'),
        language: formData.get('language'),
        title: formData.get('title'),
        text: formData.get('text')
    };
    return passage;
}