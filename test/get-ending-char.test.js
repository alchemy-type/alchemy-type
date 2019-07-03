import getEndingChar from '../src/pages/practice/get-ending-char.js';
import createSpans from '../src/pages/practice/create-spans.js';
const test = QUnit.test;

QUnit.module('getEndingChar');

test('Get the last item that needs to be typed', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello there';
    createSpans(passageText, passageParent);
    const expected = 10;
    //Act 
    const result = getEndingChar(passageParent);
    //Assert
    assert.equal(result, expected);
});

test('Get the last item that needs to be typed when there are comments', (assert) => {
    //Arrange
    const passageParent = document.createElement('section');
    const passageText = 'Hello there friend\n//hello';
    createSpans(passageText, passageParent);
    const expected = 17;
    //Act 
    const result = getEndingChar(passageParent);
    //Assert
    assert.equal(result, expected);
});