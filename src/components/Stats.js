import Component from "./Component.js";
import Logo from "./Logo.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import WPMStat from "./WPMStat.js";
import PassagesStat from "./PassagesStat.js";
import ErrorsStat from "./ErrorsStat.js";

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

    statsApi.get().then(stats => {
      const wpmStat = new WPMStat({
        wpm: stats.avg_wpm
      });
      const errorsStat = new ErrorsStat({
        errors: stats.avg_errors
      });
      const passagesStat = new PassagesStat({
        passages: stats.passages
      });

      statsContainer.appendChild(wpmStat.render());
      statsContainer.appendChild(errorsStat.render());
      statsContainer.appendChild(passagesStat.render());
    });

    const main = dom.querySelector("main");
    const statsContainer = dom.querySelector("#stats-container");

    main.prepend(logoDOM);
    main.appendChild(footerDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main class="container">
          <h1>Average Typing Statistics</h1>
          <section id="stats-container"></section>
        </main>
      </div>
    `;
  }
}

export default Stats;
