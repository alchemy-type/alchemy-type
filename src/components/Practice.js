import Component from "./Component.js";
import Logo from "./Logo.js";
import Timer from "./Timer.js";
import PassageTitle from "./PassageTitle.js";
import PracticeStats from "./PracticeStats.js";
import Header from "./Header.js";
import PracticeTextEntry from "./PracticeTextEntry.js";

import authApi from "../services/auth-api.js";
import passageApi from "../services/passage-api.js";
import { time } from "../services/stop-watch.js";
import calcWPM from "../pages/practice/calc-WPM.js";
import calcStats from "../pages/practice/calc-stats.js";
import statsApi from "../services/stats-api.js";

const searchParams = new URLSearchParams(window.location.search);
const passageId = searchParams.get("id");

let timer = 0;

let totalSeconds = 0;
let seconds = "00";
let minutes = "00";
let statsClass = "hidden";

class Practice extends Component {
  render() {
    const dom = this.renderDOM();

    const logo = new Logo();
    const logoDOM = logo.render();

    authApi.checkAuth(data => {
      this.state.user = data;
      const header = new Header({ user: this.state.user });
      const headerDOM = header.render();
      dom.prepend(headerDOM);
    });

    function loadPassage(passageId) {
      passageApi.get(passageId).then(passage => {
        practiceTextEntry.update({ passage });
        passageTitle.update({ title: passage.title });
      });
    }
    loadPassage(passageId);

    const main = dom.querySelector("main");

    const practiceTextEntry = new PracticeTextEntry({
      passage: {},
      onStartTimer: () => {
        timerDisplay.update({ action: "start" });
        timer = setInterval(() => {
          totalSeconds++;
          seconds = time(totalSeconds % 60);
          minutes = time(parseInt(totalSeconds / 60));
          timerDisplay.update({ seconds, minutes });
        }, 1000);
      },
      onStopTimer: (errorChars, emptyArray) => {
        if (totalSeconds === 0) {
          totalSeconds = 1;
        }
        const wpm = calcWPM(emptyArray, totalSeconds);
        const stats = calcStats(wpm, errorChars);
        statsClass = "";
        statsApi.save(stats);
        clearInterval(timer);
        const practiceStats = new PracticeStats({
          wpm,
          errorChars,
          statsClass
        });
        main.appendChild(practiceStats.render());
      },
      onResetTimer: () => {
        clearInterval(timer);
        totalSeconds = 0;
        minutes = "00";
        seconds = "00";
        timerDisplay.update({ seconds, minutes });
      }
    });

    const passageTitle = new PassageTitle({ title: "" });

    const timerDisplay = new Timer({ seconds, minutes });
    const timerDisplayDOM = timerDisplay.render();

    main.appendChild(logoDOM);
    main.appendChild(passageTitle.render());
    main.appendChild(timerDisplayDOM);
    main.appendChild(practiceTextEntry.render());

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main class="container">
        </main>
      </div>
    `;
  }
}

export default Practice;
