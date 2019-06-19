function createSpans(passageText, parent) {
  let commentFlag = false;
  for (let i = 0; i < passageText.length; i++) {
    const span = document.createElement("span");
    if (passageText.charAt(i) === "\n") {
      const br = document.createElement("br");
      span.classList.add("return");
      span.appendChild(br);
      commentFlag = false;
    } else if (passageText.charAt(i) + passageText.charAt(i + 1) === "//") {
      commentFlag = true;
      span.textContent = passageText.charAt(i);
    } else {
      span.textContent = passageText.charAt(i);
    }

    if (commentFlag) {
      span.classList.add("comment");
    }

    parent.appendChild(span);
  }
  return parent;
}

export default createSpans;
