function makePassage(formData) {
    const passage = {
        id: formData.get('title') + formData.get('date'),
        language: formData.get('language'),
        title: formData.get('title'),
        text: formData.get('text'),
        date: formData.get('date')
    };
    return passage;
}

export default makePassage;