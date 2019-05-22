function checkEndGame(passageArray, emptyArray) {
    
    for(let i = 0; i < passageArray.length; i++) {
        if(passageArray[i] !== emptyArray[i]) {
            return false;
        }
    }

    return true;

    // another option:
    return passageArray.join('') === emptyArray.join('');
    // or possibly:
    return passage.startsWith(emptyArray.join(''));
}

export default checkEndGame;