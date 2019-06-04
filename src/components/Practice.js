import Component from './Component.js';
import Logo from './Logo.js';
import Timer from './Timer.js';
import PassageTitle from './PassageTitle.js';
import PracticeStats from './PracticeStats.js';
import Header from './Header.js';

import authApi from '../services/auth-api.js';
import passageApi from '../services/passage-api.js';
import createSpans from '../pages/practice/create-spans.js';
// import handleEnter from '../pages/practice/handle-enter.js';
// import handleCurrentChar from '../pages/practice/handle-current-char.js';
// import getEndingChar from '../pages/practice/get-ending-char.js';
// import handleCursor from '../pages/practice/handle-cursor.js';
// import checkEndGame from '../pages/practice/check-end-game.js';
// import handleBackspace from '../pages/practice/handle-backspace.js';
// import { time } from '../services/stop-watch.js';
// import calcWPM from '../pages/practice/calc-WPM.js';
// import calcStats from '../pages/practice/calc-stats.js';
// import statsApi from '../services/stats-api.js';

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get('id');

const passage = passageApi.get(passageId);
// const passageArray = Array.from(passage.content);


// let emptyArray = [];
let errorChars = [];

// let userInputLength = 0;
// let matchFlag = true;
// let gameOver = false;
// let enterFlag = false;
// let currentChar = null;
// let startingChar = null;
// let endingChar = null;
// let timer = 0;

// let totalSeconds = 0;
let wpm = 0;
let seconds = '00';
let minutes = '00';
let statsClass = 'hidden';

class Practice extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        authApi.checkAuth((data) => {
            this.state.user = data;
            const header = new Header({ user: this.state.user });
            const headerDOM = header.render();
            dom.prepend(headerDOM);
        });

        // function loadPassage() {
        //     passageApi.get(passageId)
        //         .then(passage => {
        //             console.log(passage);
        //         });
        // }

        const timerDisplay = new Timer({ seconds, minutes });
        const timerDisplayDOM = timerDisplay.render();

        const passageTitle = new PassageTitle({ title: passage.title });
        const passageTitleDOM = passageTitle.render();

        const practiceStats = new PracticeStats({ wpm, errorChars, statsClass });
        const practiceStatsDOM = practiceStats.render();

        const main = dom.querySelector('main');

        const passageParent = dom.querySelector('#passage-characters');
        let userInput = dom.querySelector('#passage-input');

        createSpans(passage.content, passageParent);

        // emptyArray = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
        // userInputLength = emptyArray.length;
        // currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

        // startingChar = userInputLength;
        // endingChar = getEndingChar(passageParent);

        // userInput.addEventListener('input', (event) => {
        //     emptyArray.push(event.target.value);
        //     userInputLength = emptyArray.length;
        //     userInput.value = '';

        //     // Start timer on first character
        //     if(userInputLength === startingChar + 1) {
        //         timerDisplay.update({ action: 'start' });
        //         timer = setInterval(() => {
        //             totalSeconds++;
        //             seconds = time(totalSeconds % 60);
        //             minutes = time(parseInt(totalSeconds / 60));
        //             timerDisplay.update({ seconds, minutes });
        //         }, 1000);
        //     }

        //     gameOver = checkEndGame(passageArray, emptyArray, endingChar);

        //     if(!gameOver) {
        //         let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
        //         currentChar = cursorObj.currentChar;
        //         matchFlag = cursorObj.matchFlag;
        //     } else {
        //         // Stop timer and display stats on gameOver
        //         if(totalSeconds === 0) {
        //             totalSeconds = 1;
        //         }
        //         const wpm = calcWPM(emptyArray, totalSeconds);
        //         const stats = calcStats(wpm, errorChars);
        //         statsClass = '';
        //         statsApi.save(stats);
        //         practiceStats.update({ wpm, errorChars, statsClass });
        //         clearInterval(timer);
        //     }

        //     if(enterFlag && matchFlag) {
        //         emptyArray = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
        //         userInputLength = emptyArray.length;
        //         currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);

        //         if(userInputLength < passageParent.children.length) {
        //             let viewportOffset = passageParent.children[userInputLength].getBoundingClientRect();
        //             let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        //             if(viewportOffset.bottom + viewportOffset.height + 100 > viewportHeight) {
        //                 setTimeout(() => {
        //                     currentChar.scrollIntoView({ block: 'center' });
        //                 });
        //             }
        //         }

        //     }
        //     // If user enters handle extra white space and returns
        //     gameOver = checkEndGame(passageArray, emptyArray);
        //     enterFlag = false;
        // });

        // userInput.addEventListener('keydown', event => {
        //     userInputLength = emptyArray.length;
        //     if(event.code === 'Enter') {
        //         enterFlag = true;
        //     } else if(event.code === 'Backspace' && !gameOver &&
        //         userInputLength !== startingChar) {
        //         let deletedChar = emptyArray.pop();
        //         userInputLength = emptyArray.length;

        //         // Reset timer if user deletes to first character
        //         if(userInputLength === startingChar) {
        //             clearInterval(timer);
        //             errorChars = [];
        //             totalSeconds = 0;
        //             minutes = '00';
        //             seconds = '00';
        //             timerDisplay.update({ seconds, minutes });
        //         }

        //         // Handle cursor/text coloring
        //         currentChar.classList.remove('typed');
        //         if(matchFlag) {
        //             emptyArray = handleBackspace(passageParent, emptyArray, userInputLength, deletedChar);
        //             userInputLength = emptyArray.length;
        //         }
        //         let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
        //         currentChar = cursorObj.currentChar;
        //         matchFlag = cursorObj.matchFlag;
        //     }

        //     // Stop input if the passages don't match or game is over
        //     if(!matchFlag || gameOver) {
        //         event.preventDefault();
        //     }
        // });

        // Force textarea focus
        userInput.addEventListener('blur', () => {
            userInput.focus();
        });

        main.prepend(timerDisplayDOM);
        main.prepend(passageTitleDOM);
        main.prepend(logoDOM);

        main.appendChild(practiceStatsDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main class="container">
                <section id="passage-characters"></section>
                <textarea id="passage-input" autofocus></textarea>
            </main>
        </div>
    `;
    }

}

export default Practice;