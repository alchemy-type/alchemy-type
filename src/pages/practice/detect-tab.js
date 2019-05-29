function detectTab(emptyArray, userInputLength, deletedChar) {
    if(deletedChar !== ' ') {
        return false;
    }
    while(emptyArray[userInputLength - 1] === ' ' || emptyArray[userInputLength - 1] === '\n') {
        if(emptyArray[userInputLength - 1] === '\n') {
            return true;
        }
        userInputLength--;
    }
    return false;
}

export default detectTab;