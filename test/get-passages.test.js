import passageApi from '../src/services/passage-api.js';
import passages from '../src/services/passage-data.js';

const test = QUnit.test;

QUnit.module('getPassages from API');

test('return all passages from API with getAll', function(assert) {
    //Arrange
    const expected = passages;
    // Act
    const result = passageApi.getAll();

    //Assert
    assert.equal(result, expected);
});