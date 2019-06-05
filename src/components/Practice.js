import Component from './Component.js';
import Logo from './Logo.js';
import Timer from './Timer.js';
import PassageTitle from './PassageTitle.js';
// import PracticeStats from './PracticeStats.js';
import Header from './Header.js';
import PracticeTextEntry from './PracticeTextEntry.js';

import authApi from '../services/auth-api.js';
import passageApi from '../services/passage-api.js';
// import createSpans from '../pages/practice/create-spans.js';
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
// let errorChars = [];

// let userInputLength = 0;
// let matchFlag = true;
// let gameOver = false;
// let enterFlag = false;
// let currentChar = null;
// let startingChar = null;
// let endingChar = null;
// let timer = 0;

// let totalSeconds = 0;
// let wpm = 0;
let seconds = '00';
let minutes = '00';
// let statsClass = 'hidden';

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

        function loadPassage(passageId) {
            passageApi.get(passageId)
                .then(passage => {
                    practiceTextEntry.update({ passage });
                });
        }
        loadPassage(passageId);

        const main = dom.querySelector('main');

        const practiceTextEntry = new PracticeTextEntry({ passage: {} });
        main.appendChild(practiceTextEntry.render());

        const timerDisplay = new Timer({ seconds, minutes });
        const timerDisplayDOM = timerDisplay.render();

        const passageTitle = new PassageTitle({ title: passage.title });
        const passageTitleDOM = passageTitle.render();

        // const practiceStats = new PracticeStats({ wpm, errorChars, statsClass });
        // const practiceStatsDOM = practiceStats.render();

        main.prepend(timerDisplayDOM);
        main.prepend(passageTitleDOM);
        main.prepend(logoDOM);

        // main.appendChild(practiceStatsDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main class="container">
            </main>
        </div>
    `;
    }

}

export default Practice;