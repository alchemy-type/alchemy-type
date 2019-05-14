function makePassage(formData) {
    const passage = {
        id: formData.get('language') + formData.get('title'),
        language: formData.get('language'),
        title: formData.get('title'),
        text: formData.get('text')
    };
    return passage;
}

export default makePassage;