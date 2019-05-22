import Component from './Component.js';
import Logo from './Logo.js';

class PassageList extends Component {

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
        <div class="container">
            <main>
                <h1>Choose a lesson!</h1>
                <section id="passage-list"></section>
                <a href="./index.html"><button>Back Home</button></a>
            </main>
        </div>
       
    `;
    }

}

export default PassageList;