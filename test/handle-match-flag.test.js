import handleMatchFlag from '../src/practice/handle-match-flag.js';
const test = QUnit.test;

QUnit.module('handle match flag');

test('set match flag based on first correct char', (assert) => {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 1;
    emptyArray[userInputLength - 1] = 'p';
    const expected = true;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});

test('set match flag based on first wrong char', (assert) => {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 1;
    emptyArray[userInputLength - 1] = 'o';
    const expected = false;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});

test('set match flag based on last character correct', (assert) => {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 6;
    emptyArray[userInputLength - 1] = 'g';
    const expected = true;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});

test('set match flag based on last character correct', (assert) => {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 6;
    emptyArray[userInputLength - 1] = 'z';
    const expected = false;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});