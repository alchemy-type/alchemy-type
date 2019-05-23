import Component from './Component.js';
import Logo from './Logo.js';
import Timer from './Timer.js';
import PassageTitle from './PassageTitle.js';
import PracticeStats from './PracticeStats.js';

class Practice extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const timer = new Timer();
        const timerDOM = timer.render();

        const passageTitle = new PassageTitle();
        const passageTitleDOM = passageTitle.render();

        const practiceStats = new PracticeStats();
        const practiceStatsDOM = practiceStats.render();

        const main = dom.querySelector('main');

        dom.insertBefore(logoDOM, main);
        dom.insertBefore(passageTitleDOM, main);
        dom.insertBefore(timerDOM, main);

        dom.appendChild(practiceStatsDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main class="container">
                <section id="passage-characters"></section>
                <textarea id="passage-input" autofocus></textarea>
            </main>
        </div>

    `;
    }

}

export default Practice;