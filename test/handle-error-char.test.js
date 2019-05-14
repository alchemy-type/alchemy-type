import handleErrorChar from '../src/practice/handle-error-char.js';
import createSpans from '../src/practice/create-spans.js';

const test = QUnit.test;

QUnit.module('Handle Error Char');

test('Adds error-char class and remove current-char class to wrong character', function(assert) {
    //Arrange
    const passageText = 'passage';
    const expected = '<span class="error-char">p</span>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    const dom = createSpans(passageText, parent);
    dom.children[0].classList.add('current-char');
    const userInputLength = 1;
    //Act
    handleErrorChar(false, dom, dom.children[0], userInputLength);
    //Assert

    assert.equal(dom.children[0].outerHTML, expected);
});

test('Removes error-char class and adds current-char on correct', function(assert) {
    //Arrange
    const passageText = 'passage';
    const expected = '<span class="current-char">p</span>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    const dom = createSpans(passageText, parent);
    dom.children[0].classList.add('current-char');
    const userInputLength = 1;
    //Act
    handleErrorChar(true, dom, dom.children[0], userInputLength);
    //Assert

    assert.equal(dom.children[0].outerHTML, expected);
});

