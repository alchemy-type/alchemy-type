import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import { onSubmitLogin } from '../login/login.js';

class Login extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

        const form = dom.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            const user = {
                email: formData.get('email'),
                password: formData.get('password'),
            };

            onSubmitLogin(user);
        });

        dom.prepend(logoDOM);
        dom.appendChild(footerDOM);

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
        </section>
    `;
    }

}

export default Login;