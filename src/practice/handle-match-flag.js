function handleMatchFlag(emptyArray, passageArray, userInputLength) {
    if(emptyArray[userInputLength - 1] !== passageArray[userInputLength - 1]) {
        return false;
    } else {
        return true;
    }
}

export default handleMatchFlag;