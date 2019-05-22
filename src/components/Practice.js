import Component from './Component.js';

class Practice extends Component {

    renderTemplate() {
        return /*html*/`
        <div>
            <header>
                <a href="./index.html"><img src="./assets/alchemy-type.png" id="logo"></a>
                <h1 id="title"></h1>
                <p id="timer">
                <label id="minutes">00</label>:<label id="seconds">00</label>
                </p>
            </header>

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