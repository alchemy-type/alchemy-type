import calcWPM from '../src/practice/calc-WPM.js';
const test = QUnit.test;

QUnit.module('calculate WPM');

test('calculate wpm from lettersCount length and 60 seconds', assert => {
    //arrange
    let lettersCount = 11;

    let totalSeconds = 60;

    let expected = 2;
    //act

    const wpm = calcWPM(lettersCount, totalSeconds);

    //assert
    assert.equal(wpm, expected);
});

test('calculate wpm from lettersCount length and 120 seconds', assert => {
    //arrange
    let lettersCount = 11;

    let totalSeconds = 120;

    let expected = 1;
    //act

    const wpm = calcWPM(lettersArray, totalSeconds);

    //assert
    assert.equal(wpm, expected);
});