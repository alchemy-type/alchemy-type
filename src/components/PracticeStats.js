import Component from './Component.js';

class PracticeStats extends Component {

    renderTemplate() {
        return /*html*/`
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
        `;
    }

}

export default PracticeStats;