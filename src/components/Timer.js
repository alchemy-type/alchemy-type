import Component from './Component.js';

class Timer extends Component {

    renderTemplate() {
        return /*html*/`
        <p id="timer">
            <label id="minutes">00</label>:<label id="seconds">00</label>
        </p>
    `;
    }

}

export default Timer;