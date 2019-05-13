function makePassage(formData) {
    const passage = {
        id: formData.get('id'),
        language: formData.get('language'),
        title: formData.get('title'),
        text: formData.get('text')
    };
    return passage;
}

export default makePassage;