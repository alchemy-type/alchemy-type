import Component from './Component.js';
import Logo from './Logo.js';
import PassageLink from './PassageLink.js';

import templatePassages from '../services/passage-data.js';

class PassageList extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();


        const passageParent = dom.querySelector('section');

        const main = dom.querySelector('main');

        templatePassages.forEach(passage => {
            const passageLink = new PassageLink({ passage });
            const passageLinkDOM = passageLink.render();
            passageParent.appendChild(passageLinkDOM);

        });

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