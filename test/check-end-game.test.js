import checkEndGame from '../src/practice/checkEndGame.js';
const test = QUnit.test;

QUnit.module('checkEndGame');

test('return true when the two arrays match', (assert) => {
    //Arrange
    const passageText = 'Line one;\nLine two;';
    const passageTextArray = Array.from(passageText);
    const userText = 'Line one;\nLine two;';
    const userTextArray = Array.from(userText);
    const expected = true;
    //Act 
    const result = checkEndGame(passageTextArray, userTextArray);
    //Assert
    assert.equal(result, expected);
});

test('return true when the two arrays do not match', (assert) => {
    //Arrange
    const passageText = 'Line one;\nLine two;';
    const passageTextArray = Array.from(passageText);
    const userText = 'Line one;\nLine two';
    const userTextArray = Array.from(userText);
    const expected = false;
    //Act 
    const result = checkEndGame(passageTextArray, userTextArray);
    //Assert
    assert.equal(result, expected);
});