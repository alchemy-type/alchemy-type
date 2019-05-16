function createPassageLink(passage) {
    const title = document.createElement('section');
    const description = document.createElement('section');
    title.classList.add('passage-card');
    const link = document.createElement('a');
    link.classList.add('passage');
    const searchParams = new URLSearchParams();
    searchParams.set('id', passage.id);
    link.href = 'practice.html?' + searchParams.toString();
    title.textContent = passage.title;
    description.textContent = passage.description;
    link.appendChild(title);
    link.appendChild(description);
    return link;
}

export default createPassageLink;