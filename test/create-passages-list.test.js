import createPassageLink from '../src/passage-list/create-passage-link.js';

const test = QUnit.test;
QUnit.module('Create passage link');

test('take passage and create link', assert => {
    //arrange
    const passage = {
        id: 'test',
        title: 'Test Passage',
    };

    const expected = '<a class="passage" href="practice.html?id=test"><section>Test Passage</section></a>';

    //act

    const dom = createPassageLink(passage);

    //assert
    assert.equal(dom.outerHTML, expected);
});
