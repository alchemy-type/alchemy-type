function checkEndGame(passageArray, emptyArray) {
    let matchFlag = true;
    for(let i = 0; i < passageArray.length; i++) {
        if(passageArray[i] !== emptyArray[i]) {
            matchFlag = false;
            break;
        }
    }
    return matchFlag;
}

export default checkEndGame;