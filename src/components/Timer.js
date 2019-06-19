import Component from "./Component.js";

class Timer extends Component {
  renderTemplate() {
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;

    return /*html*/ `
      <p id="timer">
        <label id="minutes">${minutes}</label>:<label id="seconds">${seconds}</label>
      </p>
    `;
  }
}

export default Timer;
