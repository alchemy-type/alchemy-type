function makePassage(formData) {
    const text = formData.get('text');
    const formattedText = text.split('').filter(el => el !== '\r').join('');
    const passage = {
        id: formData.get('title') + formData.get('date'),
        language: formData.get('language'),
        title: formData.get('title'),
        text: formattedText,
        date: formData.get('date')
    };
    return passage;
}

export default makePassage;