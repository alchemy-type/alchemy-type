import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';

class Stats extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

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