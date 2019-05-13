import makePassage from '../src/passage-form/make-passage.js';

const test = QUnit.test;
QUnit.module('make passage');

test('Test saving a passage and get it back', assert => {
    //Arrange
    const passage = {
        id: 'JavaScriptpassage',
        language: 'JavaScript',
        title: 'passage',
        text: 'This is a test passage.\nThis is a second line'
    };

    const formData = new FormData();
    formData.set('id', passage.id);
    formData.set('language', passage.language);
    formData.set('title', passage.title);
    formData.set('text', passage.text);

    //Act 
    const result = makePassage(formData);
    //Assert
    assert.deepEqual(result, passage);
});

