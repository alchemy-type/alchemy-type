import calcStats from '../src/practice/calc-stats.js';
const test = QUnit.test;

QUnit.module('make object from stats');

test('store stats in an object to be saved to api', assert => {
    //arrange
    const errorChars = ['g', 'z', 'h', 'q'];

    const wpm = 35;

    const expected = {
        'wpm': 35,
        'errorChars': ['g', 'z', 'h', 'q']
    };

    //act
    const user = calcStats(wpm, errorChars);
    //assert
    assert.deepEqual(expected, user);
});