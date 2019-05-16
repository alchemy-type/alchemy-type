function createPassageLink(passage) {
    const title = document.createElement('p');
    const description = document.createElement('p');
    const searchParams = new URLSearchParams();
    const link = document.createElement('a');

    searchParams.set('id', passage.id);

    title.textContent = passage.title;
    description.textContent = passage.description;
    
    link.classList.add('passage-card');
    link.classList.add('passage');
    title.classList.add('title');
    description.classList.add('description');
    link.href = 'practice.html?' + searchParams.toString();
    link.appendChild(title);
    link.appendChild(description);

    return link;
}

export default createPassageLink;