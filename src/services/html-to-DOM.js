function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;

    if(content.children.length > 1) {
        throw 'Please only append one child to html';
    }

    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}

export default htmlToDOM;