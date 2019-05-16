import handleMatchFlag from './handle-match-flag.js';
import handleCurrentChar from './handle-current-char.js';
import handleErrorChar from './handle-error-char.js';

let errorChars = [];

function handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag) {
    matchFlag = handleMatchFlag(emptyArray, passageArray, userInputLength);
    if(matchFlag) {
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);
    } else {
        errorChars.push(emptyArray[emptyArray.length - 1]);
    }
    handleErrorChar(matchFlag, passageParent, currentChar, userInputLength);

    // Return object so we can get both the currentChar and the matchFlag back in the main file
    const cursorObj = {
        currentChar: currentChar,
        matchFlag: matchFlag
    };
    return cursorObj;
}

export { handleCursor, errorChars };