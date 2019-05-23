import Component from './Component.js';
import Logo from './Logo.js';
import Timer from './Timer.js';
import PassageTitle from './PassageTitle.js';

class Practice extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const timer = new Timer();
        const timerDOM = timer.render();

        const passageTitle = new PassageTitle();
        const passageTitleDOM = passageTitle.render();

        const main = dom.querySelector('main');

        dom.insertBefore(logoDOM, main);
        dom.insertBefore(passageTitleDOM, main);
        dom.insertBefore(timerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main class="container">
                <section id="passage-characters"></section>
                <textarea id="passage-input" autofocus></textarea>
            </main>

            <section id="stats-container" class="hidden">
                <section id="small-stats">
                    <section class="stat">
                        <label>WPM:</label>
                        <p id="wpm"></p>
                    </section>

                    <section class="stat">
                        <label>Error Count:</label>
                        <p id="error-count"></p>
                    </section>
                </section>
                <section class="stat">
                    <label>Errors:</label>
                    <p id="errors"></p>
                </section>
                <section id="buttons">
                    <a href="./index.html"><button>Back Home</button></a>
                    <a href="./passage-list.html"><button>Passages</button></a>
                </section>
            </section>
        </div>

    `;
    }

}

export default Practice;