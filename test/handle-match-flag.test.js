const test = QUnit.test;

QUnit.module('handle match flag');

test('set match flag based on first correct char', function(assert) {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 0;
    emptyArray[userInputLength] = 'p';
    //Model setting the userInputLength = to event.target.value.length
    userInputLength = 1;
    const expected = true;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});

test('set match flag based on first wrong char', function(assert) {
    //Arrange
    //Replicate event listener setup
    const passageText = 'passage text';
    const passageArray = Array.from(passageText);
    const emptyArray = Array(passageText.length);
    let userInputLength = 0;
    emptyArray[userInputLength] = 'o';
    //Model setting the userInputLength = to event.target.value.length
    userInputLength = 1;
    const expected = false;
    //act
    const result = handleMatchFlag(emptyArray, passageArray, userInputLength);
    //assert
    assert.equal(result, expected);
});

function handleMatchFlag(emptyArray, passageArray, userInputLength) {
    if(emptyArray[userInputLength - 1] !== passageArray[userInputLength - 1]) {
        return false;
    } else {
        return true;
    }
}