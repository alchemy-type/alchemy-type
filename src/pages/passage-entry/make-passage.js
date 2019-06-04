function makePassage(formData) {
    const text = formData.get('content');
    const formattedText = text.split('').filter(el => el !== '\r').join('');
    const passage = {
        id: formData.get('title') + formData.get('date'),
        description: formData.get('description'),
        language: formData.get('language'),
        title: formData.get('title'),
        content: formattedText,
        date: formData.get('date')
    };
    return passage;
}

export default makePassage;