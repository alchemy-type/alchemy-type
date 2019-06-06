import Component from './Component.js';

import createSpans from '../pages/practice/create-spans.js';
import handleEnter from '../pages/practice/handle-enter.js';
import handleCurrentChar from '../pages/practice/handle-current-char.js';
import getEndingChar from '../pages/practice/get-ending-char.js';
import checkEndGame from '../pages/practice/check-end-game.js';
import handleCursor from '../pages/practice/handle-cursor.js';
import handleBackspace from '../pages/practice/handle-backspace.js';

let userInputLength = 0;
let emptyArray = [];
let gameOver = false;
let matchFlag = true;
let enterFlag = false;
let errorChars = [];

class PracticeTextEntry extends Component {

    render() {
        const dom = this.renderDOM();

        const passage = this.props.passage;
        const onStartTimer = this.props.onStartTimer;
        const onStopTimer = this.props.onStopTimer;
        const onResetTimer = this.props.onResetTimer;

        const passageParent = dom.querySelector('#passage-characters');
        const userInput = dom.querySelector('textarea');

        setTimeout(() => {
            userInput.focus();
        });

        if(!passage.content) {
            return dom;
        }

        const passageArray = Array.from(passage.content);

        createSpans(passage.content, passageParent);

        emptyArray = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
        userInputLength = emptyArray.length;
        let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

        let startingChar = userInputLength;
        let endingChar = getEndingChar(passageParent);

        userInput.addEventListener('input', (event) => {
            emptyArray.push(event.target.value);
            userInputLength = emptyArray.length;
            userInput.value = '';

            // Start timer on first character
            if(userInputLength === startingChar + 1) {
                onStartTimer();
            }

            gameOver = checkEndGame(passageArray, emptyArray, endingChar);

            if(!gameOver) {
                let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
                currentChar = cursorObj.currentChar;
                matchFlag = cursorObj.matchFlag;
            } else {
                // Stop timer and display stats on gameOver
                onStopTimer(errorChars, emptyArray);
            }

            if(enterFlag && matchFlag) {
                emptyArray = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
                userInputLength = emptyArray.length;
                currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);

                if(userInputLength < passageParent.children.length) {
                    let viewportOffset = passageParent.children[userInputLength].getBoundingClientRect();
                    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                    if(viewportOffset.bottom + viewportOffset.height + 100 > viewportHeight) {
                        setTimeout(() => {
                            currentChar.scrollIntoView({ block: 'center' });
                        });
                    }
                }

            }
            // If user enters handle extra white space and returns
            gameOver = checkEndGame(passageArray, emptyArray);
            enterFlag = false;
        });

        userInput.addEventListener('keydown', event => {
            if(event.code === 'Tab')
                event.preventDefault();
            userInputLength = emptyArray.length;
            if(event.code === 'Enter') {
                enterFlag = true;
            } else if(event.code === 'Backspace' && !gameOver &&
                userInputLength !== startingChar) {
                let deletedChar = emptyArray.pop();
                userInputLength = emptyArray.length;

                // Reset timer if user deletes to first character
                if(userInputLength === startingChar) {
                    errorChars = [];
                    onResetTimer();
                }

                // Handle cursor/text coloring
                currentChar.classList.remove('typed');
                if(matchFlag) {
                    emptyArray = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
                    userInputLength = emptyArray.length;
                }
                let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
                currentChar = cursorObj.currentChar;
                matchFlag = cursorObj.matchFlag;
            }

            // Stop input if the passages don't match or game is over
            if(!matchFlag || gameOver) {
                event.preventDefault();
            }
        });

        userInput.addEventListener('blur', () => {
            userInput.focus();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <section id="passage-characters"></section>
                <textarea class="passage-input" autofocus></textarea>
            </div>
        `;
    }

}

export default PracticeTextEntry;