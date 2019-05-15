function createPassageLink(passage) {
    const section = document.createElement('section');
    section.classList.add('passage-card');
    const link = document.createElement('a');
    link.classList.add('passage');
    const searchParams = new URLSearchParams();
    searchParams.set('id', passage.id);
    link.href = 'practice.html?' + searchParams.toString();
    section.textContent = passage.title;
    link.appendChild(section);
    return link;
}

export default createPassageLink;