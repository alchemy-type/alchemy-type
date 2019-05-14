import makePassage from '../src/passage-form/make-passage.js';

const test = QUnit.test;
QUnit.module('make passage');

test('Test saving a passage and get it back', assert => {
    //Arrange
    const date = Date.now();
    const passage = {
        id: 'passage' + date,
        language: 'JavaScript',
        title: 'passage',
        text: 'This is a test passage.\nThis is a second line',
        date: date.toString()
    };

    const formData = new FormData();
    formData.set('id', passage.id);
    formData.set('language', passage.language);
    formData.set('title', passage.title);
    formData.set('text', passage.text);
    formData.set('date', passage.date);

    //Act 
    const result = makePassage(formData);
    //Assert
    assert.deepEqual(result, passage);
});

