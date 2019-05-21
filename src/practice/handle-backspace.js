import detectTab from './detect-tab.js';

function handleBackspace(passageParent, emptyArray, userInputLength, deletedChar) {
    if(deletedChar !== '\n' && !detectTab(emptyArray, userInputLength, deletedChar)) {
        return emptyArray;
    }
    while(emptyArray[userInputLength - 1] === '\n' || emptyArray[userInputLength - 1] === ' ' ||
        passageParent.children[userInputLength - 1].classList.contains('comment')) {
        deletedChar = emptyArray.pop();
        userInputLength = emptyArray.length;
    }
    return emptyArray;
}

export default handleBackspace;