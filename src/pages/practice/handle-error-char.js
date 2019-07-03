function handleErrorChar(
  matchFlag,
  passageParent,
  currentChar,
  userInputLength
) {
  if (!matchFlag) {
    let errorChar = passageParent.children[userInputLength - 1];
    errorChar.classList.add("error-char");
    currentChar.classList.remove("current-char");
  } else {
    let errorChars = document.querySelectorAll(".error-char");
    for (let i = 0; i < errorChars.length; i++) {
      let errorChar = errorChars[i];
      errorChar.classList.remove("error-char");
    }
  }
}

export default handleErrorChar;
