import handleEnter from '../src/practice/handle-enter.js';
import createSpans from '../src/practice/create-spans.js';
const test = QUnit.test;

QUnit.module('Handle Enter');

test('skips 2 extra spaces after enter input', function(assert) {
    //Arrange
    const passageParent = document.createElement('span');
    passageParent.classList.add('passage-characters');
    const passage = 'line one;\n  line two;';
    createSpans(passage, passageParent);
    const passageArray = Array.from(passage);
    const emptyArray = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n'];
    const userInputLength = emptyArray.length;
    const expected = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n', ' ', ' '];
    //Act
    const result = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
    //Assert
    assert.deepEqual(result, expected);
});

test('skips 4 extra spaces after enter input', function(assert) {
    //Arrange
    const passageParent = document.createElement('span');
    passageParent.classList.add('passage-characters');
    const passage = 'line one;\n    line two;';
    createSpans(passage, passageParent);
    const passageArray = Array.from(passage);
    const emptyArray = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n'];
    const userInputLength = emptyArray.length;
    const expected = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n', ' ', ' ', ' ', ' '];
    //Act
    const result = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
    //Assert
    assert.deepEqual(result, expected);
});

test('skips two returns and 4 extra spaces after enter input', function(assert) {
    //Arrange
    const passageParent = document.createElement('span');
    passageParent.classList.add('passage-characters');
    const passage = 'line one;\n\n    line three;';
    createSpans(passage, passageParent);
    const passageArray = Array.from(passage);
    const emptyArray = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n'];
    const userInputLength = emptyArray.length;
    const expected = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n', '\n', ' ', ' ', ' ', ' '];
    //Act
    const result = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
    //Assert
    assert.deepEqual(result, expected);
});

test('skips 2 returns and 4 extra spaces, then a return and 4 more spaces after enter input', function(assert) {
    //Arrange
    const passageParent = document.createElement('span');
    passageParent.classList.add('passage-characters');
    const passage = 'line one;\n\n    \n    line three;';
    createSpans(passage, passageParent);
    const passageArray = Array.from(passage);
    const emptyArray = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n'];
    const userInputLength = emptyArray.length;
    const expected = ['l', 'i', 'n', 'e', ' ', 'o', 'n', 'e', ';', '\n', '\n', ' ', ' ', ' ', ' ', '\n', ' ', ' ', ' ', ' '];
    //Act
    const result = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
    //Assert
    assert.deepEqual(result, expected);
});