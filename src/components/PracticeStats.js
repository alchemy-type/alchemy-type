import Component from "./Component.js";

class PracticeStats extends Component {
  renderTemplate() {
    const wpm = this.props.wpm;
    const errorChars = this.props.errorChars;
    const statsClass = this.props.statsClass;

    return /*html*/ `
      <section id="stats-container" class="${statsClass}">
        <section id="small-stats">
          <section class="stat">
            <label>WPM:</label>
            <p id="wpm">${wpm}</p>
          </section>
  
          <section class="stat">
            <label>Error Count:</label>
            <p id="error-count">${errorChars.length}</p>
          </section>
        </section>

        <section class="stat">
          <label>Errors:</label>
          <p id="errors">${errorChars}</p>
        </section>
        
        <section id="buttons">
          <a href="./index.html"><button>Back Home</button></a>
          <a href="./passage-list.html"><button>Passages</button></a>
        </section>
      </section>
    `;
  }
}

export default PracticeStats;
