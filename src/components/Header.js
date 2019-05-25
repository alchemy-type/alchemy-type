import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
        <header>
            <h1>Alchemy Type</h1>
            <section>
                <a href='./login.html'><h1>Login</h1></a>
            </section>
        </header>
    `;
    }

}

export default Header;