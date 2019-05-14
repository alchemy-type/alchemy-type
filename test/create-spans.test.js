import createSpans from '../src/practice/create-spans.js';
const test = QUnit.test;

QUnit.module('Create spans');

test('create spans from single line passagetext', function(assert) {
    //Arrange
    const passageText = 'passage text';
    const expected = '<section id="passage-characters"><span>p</span><span>a</span><span>s</span><span>s</span><span>a</span><span>g</span><span>e</span><span> </span><span>t</span><span>e</span><span>x</span><span>t</span></section>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    //Act
    const result = createSpans(passageText, parent); 
    //Assert

    assert.equal(result.outerHTML, expected);
});
