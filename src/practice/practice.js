import createSpans from './create-spans.js';
import handleCurrentChar from './handle-current-char.js';
import checkEndGame from './check-end-game.js';
import passageApi from '../services/passage-api.js';
import { stopWatch, reset, totalSeconds } from '../services/stop-watch.js';
import handleEnter from './handle-enter.js';
import handleCursor from './handle-cursor.js';
import calcWPM from './calc-WPM.js';
import calcStats from './calc-stats.js';
import statsApi from '../services/stats-api.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');
let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let statsDisplay = document.getElementById('stats-container');
let wpmDisplay = document.getElementById('wpm');
let errorCountDisplay = document.getElementById('error-count');
let errorsDisplay = document.getElementById('errors');
let passageTitle = document.getElementById('title');

statsApi.init();

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get('id');

const passage = passageApi.get(passageId);
passageTitle.textContent = passage.title;

createSpans(passage.text, passageParent);

const passageArray = Array.from(passage.text);
let emptyArray = [];
let errorChars = [];

let userInputLength = 0;
let matchFlag = true;
let gameOver = false;
let enterFlag = false;
let timer = null;

// Start cursor at the beginning
emptyArray = handleEnter(userInputLength, passageArray, passageParent, emptyArray);
userInputLength = emptyArray.length;
let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

//If the passage starts with a comment this will be set to the character right after the comments end
//Otherwise it will be 0
let startingChar = userInputLength;
let endingChar = getEndingChar(passageParent);

userInput.addEventListener('input', (event) => {
    emptyArray.push(event.target.value);
    userInputLength = emptyArray.length;
    userInput.value = '';

    // Start timer on first character
    if(userInputLength === startingChar + 1) {
        timer = setInterval(stopWatch, 1000);
    }

    gameOver = checkEndGame(passageArray, emptyArray, endingChar);

    if(!gameOver) {
        let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
        currentChar = cursorObj.currentChar;
        matchFlag = cursorObj.matchFlag;
    } else {
        // Stop timer and display stats on gameOver
        const wpm = calcWPM(emptyArray, totalSeconds);
        const stats = calcStats(wpm, errorChars);
        statsApi.save(stats);
        wpmDisplay.textContent = wpm;
        errorCountDisplay.textContent = errorChars.length;
        errorsDisplay.textContent = errorChars;
        statsDisplay.classList.remove('hidden');
        clearInterval(timer);
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
    userInputLength = emptyArray.length;
    if(event.code === 'Enter') {
        enterFlag = true;
    } else if(event.code === 'Backspace' && !gameOver &&
        userInputLength !== startingChar) {
        emptyArray.pop();
        userInputLength = emptyArray.length;

        // Reset timer if user deletes to first character
        if(userInputLength === startingChar) {
            reset();
            clearInterval(timer);
            errorChars = [];
            minutesLabel.textContent = '00';
            secondsLabel.textContent = '00';
        }

        // Handle cursor/text coloring
        currentChar.classList.remove('typed');
        let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag, errorChars);
        currentChar = cursorObj.currentChar;
        matchFlag = cursorObj.matchFlag;
    }

    // Stop input if the passages don't match or game is over
    if(!matchFlag || gameOver) {
        event.preventDefault();
    }
});

// Force textarea focus
userInput.addEventListener('blur', () => {
    userInput.focus();
});

function getEndingChar(passageParent) {
    let endCommentFlag = false;
    for(let i = passageParent.children.length - 1; i > 0; i--) {
        if(!passageParent.children[i].classList.contains('comment')) {
            if(endCommentFlag) {
                i--;
            }
            return i;
        } else {
            endCommentFlag = true;
        }
    }
    return 0;
}