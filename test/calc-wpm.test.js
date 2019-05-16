import calcWPM from '../src/practice/calcWPM.js';
const test = QUnit.test;

QUnit.module('calculate WPM');

test('calculate wpm from emptyArray length and 60 seconds', assert => {
    //arrange
    let emptyArray = ['h', 'e', 'l', 'l', 'o', ' ', 'd', 'a', 'n', 'n', 'y'];

    let totalSeconds = 60;

    let expected = 2;
    //act

    const wpm = calcWPM(emptyArray, totalSeconds);

    //assert
    assert.equal(wpm, expected);
});

test('calculate wpm from emptyArray length and 120 seconds', assert => {
    //arrange
    let emptyArray = ['h', 'e', 'l', 'l', 'o', ' ', 'd', 'a', 'n', 'n', 'y'];

    let totalSeconds = 120;

    let expected = 1;
    //act

    const wpm = calcWPM(emptyArray, totalSeconds);

    //assert
    assert.equal(wpm, expected);
});