function createPassageLink(passage) {
    const anchor = document.createElement('a');
    anchor.classList.add('passage');
    anchor.textContent = passage.title;
    const searchParams = new URLSearchParams();
    searchParams.set('id', passage.id);
    anchor.href = 'passages.html?' + searchParams.toString();

    return anchor;
}

export default createPassageLink;