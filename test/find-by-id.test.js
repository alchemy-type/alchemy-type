import findById from '../src/services/find-by-id.js';
const test = QUnit.test;

QUnit.module('findById');

test('Get an item based on its id', (assert) => {
    //Arrange
    const passages = [
        {
            id: 'id1',
            title: 'passage1'
        },
        {
            id: 'id2',
            title: 'passage2'
        }
    ];
    const expected = passages[1];
    //Act 
    const result = findById(passages, passages[1].id);
    //Assert
    assert.equal(result, expected);
});