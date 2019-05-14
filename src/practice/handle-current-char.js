function handleCurrentChar(passageParent, currentChar, userInputLength) {
    currentChar.classList.remove('current-char');
    currentChar = passageParent.children[userInputLength];
    currentChar.classList.add('current-char');
    return currentChar;
}

export default handleCurrentChar;