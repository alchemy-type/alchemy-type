function getEndingChar(passageParent) {
  let endCommentFlag = false;
  for (let i = passageParent.children.length - 1; i > 0; i--) {
    if (!passageParent.children[i].classList.contains("comment")) {
      if (endCommentFlag) {
        i--;
      }
      return i;
    } else {
      endCommentFlag = true;
    }
  }
  return 0;
}

export default getEndingChar;
