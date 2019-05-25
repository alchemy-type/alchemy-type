import Component from './Component.js';
import Logo from './Logo.js';
import HomeNav from './HomeNav.js';
import HomeFooter from './HomeFooter.js';
import Header from './Header.js';

class Home extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const homeNav = new HomeNav();
        const homeNavDOM = homeNav.render();

        const homeFooter = new HomeFooter();
        const homeFooterDOM = homeFooter.render();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');

        dom.prepend(headerDOM);
        main.appendChild(logoDOM);
        main.appendChild(homeNavDOM);
        main.appendChild(homeFooterDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main></main>
        </div>
    `;
    }

}

export default Home;