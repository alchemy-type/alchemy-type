import createPassageLink from '../src/passages/create-passage-link.js';

const test = QUnit.test;
QUnit.module('Create passage link');

test('take passage and create link', assert => {
    //arrange
    const passage = {
        id: 'test',
        title: 'Test Passage',
    };

    const expected = '<a class="passage" href="passages.html?id=test">Test Passage</a>';

    //act

    const dom = createPassageLink(passage);

    //assert
    assert.equal(dom.outerHTML, expected);
});
