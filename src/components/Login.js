import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import Header from './Header.js';
import LoginForm from './LoginForm.js';

import authApi from '../services/auth-api.js';

class Login extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

        authApi.checkAuth((data) => {
            this.state.user = data;
            const header = new Header({ user: this.state.user });
            const headerDOM = header.render();
            dom.prepend(headerDOM);
        });

        const loginForm = new LoginForm({
            loginSuccess: true,
            onProcessLogin: (status) => {
                loginForm.update({ loginSuccess: status });
            }
        });
        const loginFormDOM = loginForm.render();

        const main = dom.querySelector('main');

        main.prepend(logoDOM);
        main.appendChild(loginFormDOM);
        main.appendChild(footerDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main class="container">
                <h1>Login</h1>
            </main>
        </div>
    `;
    }

}

export default Login;