function createSpans(passageText, parent) {
    for(let i = 0; i < passageText.length; i++) {
        const span = document.createElement('span');
        if(passageText.charAt(i) === '\n') {
            const br = document.createElement('br');
            span.classList.add('return');
            span.appendChild(br);
        } else {
            span.textContent = passageText.charAt(i);
        }
        parent.appendChild(span);
    }
    return parent;
}

export default createSpans;