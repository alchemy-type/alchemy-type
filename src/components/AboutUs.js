import Component from './Component.js';
import Logo from './Logo.js';

class AboutUs extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const main = dom.querySelector('main');

        dom.insertBefore(logoDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section id="main-container">
            <main>
                <section class="box">
                    <p class="name">Jack McConnell</p>
                    <section class="icons-container">
                        <a href="https://github.com/jwmcconnell"><img id="icons" src="/assets/logos/github.svg"
                                alt="github-logo"></a>
                        <a href="https://www.linkedin.com/in/mcconnelljack/"><img id="icons"
                                src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                        <a href="https://twitter.com/jackwmcconnell"><img id="icons" src="/assets/logos/twitter.svg"
                                alt="twitter-logo"></a>
                    </section>
                </section>

                <section class="box">
                    <p class="name">Danny Hogan</p>
                    <section class="icons-container">
                        <a href="https://github.com/dannyhogan"><img id="icons" src="/assets/logos/github.svg"
                                alt="github-logo"></a>
                        <a href="https://www.linkedin.com/in/danny-hogan-3225b2183/"><img id="icons"
                                src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                        <a href="https://twitter.com/_DannyHogan"><img id="icons" src="/assets/logos/twitter.svg"
                                alt="twitter-logo"></a>
                    </section>
                </section>

                <section class="box">
                    <p class="name">Eli Nicholson</p>
                    <section class="icons-container">
                        <a href="https://github.com/EmNicholson93"><img id="icons" src="/assets/logos/github.svg"
                                alt="github-logo"></a>
                        <a href="https://www.linkedin.com/in/eli-nicholson-87806062/"><img id="icons"
                                src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                        <a href="https://twitter.com/eli__nicholson"><img id="icons" src="/assets/logos/twitter.svg"
                                alt="twitter-logo"></a>
                    </section>
                </section>
            </main>
        <footer>
            <a href="./index.html"><button>Back Home</button></a>
        </footer>
    </section>
    `;
    }

}

export default AboutUs;