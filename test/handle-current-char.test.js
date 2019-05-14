import createSpans from '../src/practice/create-spans.js';
import handleCurrentChar from '../src/practice/handle-current-char.js';
const test = QUnit.test;

QUnit.module('Handle Current Char');

test('Removes current-char class on previous (first character) currentChar span', function(assert) {
    //Arrange
    const passageText = 'passage';
    const expected = '<span class="">p</span>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    const dom = createSpans(passageText, parent);
    dom.children[0].classList.add('current-char');
    const userInputLength = 1;
    //Act
    handleCurrentChar(dom, dom.children[0], userInputLength);
    //Assert

    assert.equal(dom.children[0].outerHTML, expected);
});

test('Adds current-char to next charcter', function(assert) {
    //Arrange
    const passageText = 'passage';
    const expected = '<span class="current-char">a</span>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    const dom = createSpans(passageText, parent);
    dom.children[0].classList.add('current-char');
    const userInputLength = 1;
    //Act
    const result = handleCurrentChar(dom, dom.children[0], userInputLength);
    //Assert

    assert.equal(result.outerHTML, expected);
});
