import createPassageLink from '../src/passage-list/create-passage-link.js';

const test = QUnit.test;
QUnit.module('Create passage link');

test('take passage and create link', assert => {
    //arrange
    const passage = {
        id: 'test',
        title: 'Test Passage',
        description: 'Test a Passage Input'
    };

    const expected = '<a class="passage-card" href="practice.html?id=test"><p class="title">Test Passage</p><p class="description">Test a Passage Input</p></a>';

    //act

    const dom = createPassageLink(passage);

    //assert
    assert.equal(dom.outerHTML, expected);
});
