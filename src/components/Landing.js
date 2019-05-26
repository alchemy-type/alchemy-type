import Component from './Component.js';
import Header from './Header.js';
import Logo from './Logo.js';
import LandingNav from './LandingNav.js';
import authApi from '../services/auth-api.js';

class Landing extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ user: this.state.user });
        const headerDOM = header.render();

        authApi.checkAuth((data) => {
            this.state.user = data;
            header.update({ user: this.state.user });
        });

        const logo = new Logo();
        const logoDOM = logo.render();

        const landingNav = new LandingNav();
        const landingNavDOM = landingNav.render();

        const main = dom.querySelector('main');

        dom.prepend(headerDOM);
        main.appendChild(logoDOM);
        main.appendChild(landingNavDOM);

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

export default Landing;