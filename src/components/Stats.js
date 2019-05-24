import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import statsApi from '../services/stats-api.js';

class Stats extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

        statsApi.init();
        const stats = statsApi.get();

        const avgWPM = dom.querySelector('#avg-wpm');
        avgWPM.textContent = stats.avgWPM.toFixed(2);

        const avgErrors = dom.querySelector('#avg-error-count');
        avgErrors.textContent = stats.avgErrors.toFixed(2);

        const passages = dom.querySelector('#passages');
        passages.textContent = stats.passages;

        dom.prepend(logoDOM);
        dom.appendChild(footerDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
        <h1>Average Typing Statistics</h1>
        <main id="stats-container">
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
        </main>
        </div>
    `;
    }

}

export default Stats;