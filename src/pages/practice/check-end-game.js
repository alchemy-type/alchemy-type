function checkEndGame(passageArray, emptyArray, endingChar) {
  let matchFlag = true;
  for (let i = 0; i < passageArray.length; i++) {
    if (passageArray[i] !== emptyArray[i]) {
      matchFlag = false;
      break;
    } else if (i === endingChar) {
      return matchFlag;
    }
  }
  return matchFlag;
}

export default checkEndGame;
