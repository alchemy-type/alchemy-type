import Component from "./Component.js";
import Logo from "./Logo.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

import authApi from "../services/auth-api.js";
import statsApi from "../services/stats-api.js";

class Stats extends Component {
  render() {
    const dom = this.renderDOM();

    const logo = new Logo();
    const logoDOM = logo.render();

    const footer = new Footer();
    const footerDOM = footer.render();

    authApi.checkAuth(data => {
      this.state.user = data;
      const header = new Header({ user: this.state.user });
      const headerDOM = header.render();
      dom.prepend(headerDOM);
    });

    statsApi.init();
    const stats = statsApi.get();

    const avgWPM = dom.querySelector("#avg-wpm");
    avgWPM.textContent = stats.avgWPM.toFixed(2);

    const avgErrors = dom.querySelector("#avg-error-count");
    avgErrors.textContent = stats.avgErrors.toFixed(2);

    const passages = dom.querySelector("#passages");
    passages.textContent = stats.passages;

    const main = dom.querySelector("main");

    main.prepend(logoDOM);
    main.appendChild(footerDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main class="container">
          <h1>Average Typing Statistics</h1>
          <section id="stats-container">
            <section class="stat">
              <label>Average WPM:</label>
              <p id="avg-wpm"></p>
            </section>

            <section class="stat">
              <label>Average # of Errors:</label>
              <p id="avg-error-count"></p>
            </section>

            <section class="stat">
              <label>Passages Completed: </label>
              <p id="passages"></p>
            </section>
          </section>
        </main>
      </div>
    `;
  }
}

export default Stats;
