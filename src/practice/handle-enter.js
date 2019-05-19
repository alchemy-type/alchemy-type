function handleEnter(userInputLength, passageArray, passageParent, emptyArray) {
    while(passageArray[userInputLength] === ' ' || passageArray[userInputLength] === '\n' ||
        passageParent.children[userInputLength].classList.contains('comment')) {
        if(passageArray[userInputLength] === ' ') {
            emptyArray.push(' ');
        } else if(passageArray[userInputLength] === '\n') {
            emptyArray.push('\n');
        } else {
            emptyArray.push(passageArray[userInputLength]);
        }

        userInputLength++;

        if(userInputLength >= passageParent.children.length) {
            return emptyArray;
        }
    }

    return emptyArray;
}

export default handleEnter;