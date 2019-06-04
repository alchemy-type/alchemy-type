import detectTab from '../src/pages/practice/detect-tab.js';
const test = QUnit.test;

QUnit.module('detect tab');

test('Doesn`t find a tab', (assert) => {
    //Arrange
    // const passageParent = document.createElement('section');
    // const passageText = 'Hello world';
    // createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = 'w';
    const expected = false;
    //Act 
    const result = detectTab(emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('Doesn`t find a tab', (assert) => {
    //Arrange
    // const passageParent = document.createElement('section');
    // const passageText = 'Hello world';
    // createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o'];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = false;
    //Act 
    const result = detectTab(emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('finds tab', (assert) => {
    //Arrange
    // const passageParent = document.createElement('section');
    // const passageText = 'Hello world';
    // createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', '\n'];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = true;
    //Act 
    const result = detectTab(emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});

test('finds tab', (assert) => {
    //Arrange
    // const passageParent = document.createElement('section');
    // const passageText = 'Hello world';
    // createSpans(passageText, passageParent);
    // const passageArray = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const emptyArray = ['H', 'e', 'l', 'l', 'o', '\n', ' '];
    const userInputLength = emptyArray.length;
    const deletedChar = ' ';
    const expected = true;
    //Act 
    const result = detectTab(emptyArray, userInputLength, deletedChar);
    //Assert
    assert.deepEqual(result, expected);
});