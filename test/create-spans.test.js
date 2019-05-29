import createSpans from '../src/pages/practice/create-spans.js';
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

test('create spans from multiline passageText', function(assert) {
    //Arrange
    const passageText = 'Line one;\nLine two;';
    const expected = '<section id="passage-characters"><span>L</span><span>i</span><span>n</span><span>e</span><span> </span><span>o</span><span>n</span><span>e</span><span>;</span><span class="return"><br></span><span>L</span><span>i</span><span>n</span><span>e</span><span> </span><span>t</span><span>w</span><span>o</span><span>;</span></section>';
    const parent = document.createElement('section');
    parent.id = 'passage-characters';
    //Act
    const result = createSpans(passageText, parent);
    //Assert

    assert.equal(result.outerHTML, expected);
});
