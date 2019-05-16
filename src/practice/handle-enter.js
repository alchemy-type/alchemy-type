function handleEnter(userInputLength, passageArray, emptyArray) {
    while(passageArray[userInputLength] === ' ' || passageArray[userInputLength] === '\n') {
        if(passageArray[userInputLength] === ' ') {
            emptyArray.push(' ');
        } else {
            emptyArray.push('\n');
        }
        userInputLength++;
    }

    return emptyArray;
}

export default handleEnter;