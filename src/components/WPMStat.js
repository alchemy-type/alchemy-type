import Component from "./Component.js";

class WPMStat extends Component {
  renderTemplate() {
    const wpm = this.props.wpm;
    return /*html*/ `
      <section class="stat">
        <label>Average WPM:</label>
        <p id="avg-wpm">${wpm.toFixed(2)}</p>
      </section>
    `;
  }
}

export default WPMStat;
