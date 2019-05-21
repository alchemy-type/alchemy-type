import createSpans from '../src/practice/create-spans.js';
import handleBackspace from '../src/practice/handle-backspace.js';
const test = QUnit.test;

QUnit.module('handleBackspace');

test('Don`t delete anything', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello world';
    createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = 'w';
    const expected = ['H', 'e', 'l', 'l', 'o', ' '];
    //Act 
    const result = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('Delete a tab after a newline', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello world';
    createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', '\n', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = ['H', 'e', 'l', 'l', 'o'];
    //Act 
    const result = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('Delete a newline and a tab that come after a tab', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello\n\n world';
    createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', '\n', '\n', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = ['H', 'e', 'l', 'l', 'o'];
    //Act 
    const result = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('Delete a newline and a tab that come after a tab', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello\n//world\n  ';
    createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', '/', '/', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', '\n', '/', '/', 'w', 'o', 'r', 'l', 'd', '\n', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = ['H', 'e', 'l', 'l', 'o'];
    //Act 
    const result = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});