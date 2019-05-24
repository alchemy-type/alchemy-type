import Component from './Component.js';
import Logo from './Logo.js';

class Login extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        dom.prepend(logoDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <h1>Login</h1>
            <form id="login-form">
                <label>Email:</label>
                <input id="email" name="email" required>
                <label>Password:</label>
                <input id="password" name="password" type="password" required></input>
                <button>Submit</button>
            </form>
            <a href="./index.html"><button>Back Home</button></a>
        </section>
    `;
    }

}

export default Login;