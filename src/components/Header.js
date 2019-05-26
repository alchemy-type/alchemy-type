import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        const user = this.props.user || '';
        return /*html*/`
        <header>
            <h1>Alchemy Type</h1>
            <section class="user-header">
                <h1>${user.name}</h1>
                <a href='./login.html'><h1>${user.email ? 'Logout' : 'Login'}</h1></a>
            </section>
        </header>
    `;
    }

}

export default Header;