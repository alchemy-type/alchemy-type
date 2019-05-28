import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        const user = this.props.user || {};
        return /*html*/`
        <header>
            <h1>Alchemy Type</h1>
            <section class="user-header">
                <h2>${user.name || ''}</h2>
                <a href='./login.html'><h2>${user.email ? 'Logout' : 'Login'}</h2></a>
            </section>
        </header>
    `;
    }

}

export default Header;