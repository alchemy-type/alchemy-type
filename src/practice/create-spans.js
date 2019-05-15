function createSpans(passageText, parent) {
    for(let i = 0; i < passageText.length; i++) {
        const span = document.createElement('span');
        span.textContent = passageText.charAt(i);
        if(passageText.charAt(i) === '\n') {
            const br = document.createElement('br');
            span.classList.add('return');
            span.appendChild(br);
        }
        parent.appendChild(span);
    }
    return parent;
}

export default createSpans;