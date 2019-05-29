function handleCurrentChar(passageParent, currentChar, userInputLength) {
    if(userInputLength < passageParent.children.length) {
        currentChar.classList.remove('current-char');
        currentChar = passageParent.children[userInputLength];
        currentChar.classList.add('typed');
        currentChar.classList.add('current-char');
    }
    return currentChar;
}

export default handleCurrentChar;