function createSpans(passageText, parent) {
    for(let i = 0; i < passageText.length; i++) {
        const span = document.createElement('span');
        span.textContent = passageText.charAt(i);
        parent.appendChild(span);
    }
    return parent;
}

export default createSpans;