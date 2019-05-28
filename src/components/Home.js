import Component from './Component.js';
import Logo from './Logo.js';
import HomeNav from './HomeNav.js';
import HomeFooter from './HomeFooter.js';
import Header from './Header.js';

import authApi from '../services/auth-api.js';

class Home extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const homeNav = new HomeNav();
        const homeNavDOM = homeNav.render();

        const homeFooter = new HomeFooter();
        const homeFooterDOM = homeFooter.render();



        authApi.checkAuth((data) => {
            this.state.user = data;
            const header = new Header({ user: this.state.user });
            const headerDOM = header.render();
            dom.prepend(headerDOM);
        });

        const main = dom.querySelector('main');


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