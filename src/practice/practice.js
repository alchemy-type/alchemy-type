import createSpans from './create-spans.js';
import handleCurrentChar from './handle-current-char.js';
import checkEndGame from './checkEndGame.js';
import passageApi from '../services/passage-api.js';
import { stopWatch, reset, totalSeconds } from '../services/stop-watch.js';
import handleEnter from './handle-enter.js';
import { handleCursor, errorChars } from './handle-cursor.js';
import calcWPM from './calc-WPM.js';
// import calcStats from './calc-stats.js';

let passageParent = document.getElementById('passage-characters');
let userInput = document.getElementById('passage-input');
let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let statsDisplay = document.getElementById('stats-container');
let wpmDisplay = document.getElementById('wpm');
let errorCountDisplay = document.getElementById('error-count');
let errorsDisplay = document.getElementById('errors');

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get('id');

const passage = passageApi.get(passageId);

createSpans(passage.text, passageParent);

const passageArray = Array.from(passage.text);
let emptyArray = [];

let userInputLength = 0;
let matchFlag = true;
let gameOver = false;
let enterFlag = false;
let timer = null;

// Start cursor at the beginning
let currentChar = handleCurrentChar(passageParent, passageParent.children[0], userInputLength);

userInput.addEventListener('input', (event) => {
    emptyArray.push(event.target.value);
    userInputLength = emptyArray.length;
    userInput.value = '';
    
    // Start timer on first character
    if(userInputLength === 1) {
        timer = setInterval(stopWatch, 1000);
    }
    
    gameOver = checkEndGame(passageArray, emptyArray);
    
    if(!gameOver) {
        let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag);
        currentChar = cursorObj.currentChar;
        matchFlag = cursorObj.matchFlag;
    } else {
        // Stop timer and display stats on gameOver
        const wpm = calcWPM(emptyArray, totalSeconds);
        wpmDisplay.textContent = wpm;
        errorCountDisplay.textContent = errorChars.length;
        errorsDisplay.textContent = errorChars;
        statsDisplay.classList.remove('hidden');
        clearInterval(timer);
    }

    // If user enters handle extra white space and returns
    if(enterFlag && matchFlag) {
        emptyArray = handleEnter(userInputLength, passageArray, emptyArray, userInput);
        userInputLength = emptyArray.length;
        currentChar = handleCurrentChar(passageParent, currentChar, userInputLength);

        let viewportOffset = passageParent.children[userInputLength].getBoundingClientRect();
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if(viewportOffset.bottom + viewportOffset.height + 100 > h) {
            setTimeout(() => {
                currentChar.scrollIntoView({ block: 'center' });
            });
        }
    }
    enterFlag = false;
});

userInput.addEventListener('keydown', event => {
    if(event.code === 'Enter') {
        enterFlag = true;
    } else if(event.code === 'Backspace' && !gameOver) {
        emptyArray.pop();
        userInputLength = emptyArray.length;

        // Reset timer if user deletes to first character
        if(userInputLength === 0) {
            reset();
            clearInterval(timer);
            minutesLabel.textContent = '00';
            secondsLabel.textContent = '00';
        }

        // Handle cursor/text coloring
        currentChar.classList.remove('typed');
        let cursorObj = handleCursor(emptyArray, passageArray, passageParent, currentChar, userInputLength, matchFlag);
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
