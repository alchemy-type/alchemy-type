import Component from './Component.js';
import Logo from './Logo.js';
import HomeNav from './HomeNav.js';
import HomeFooter from './HomeFooter.js';

class Home extends Component {

    render() {
        const homeDOM = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const homeNav = new HomeNav();
        const homeNavDOM = homeNav.render();

        const homeFooter = new HomeFooter();
        const homeFooterDOM = homeFooter.render();

        const main = homeDOM.querySelector('main');

        homeDOM.insertBefore(logoDOM, main);
        main.appendChild(homeNavDOM);
        homeDOM.appendChild(homeFooterDOM);

        return homeDOM;
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