import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';

class Login extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

        const loginForm = new LoginForm({
            loginSuccess: true,
            onProcessLogin: (status) => {
                loginForm.update({ loginSuccess: status });
            }
        });
        const loginFormDOM = loginForm.render();

        dom.prepend(logoDOM);
        dom.appendChild(loginFormDOM);
        dom.appendChild(footerDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <h1>Login</h1>
        </section>
    `;
    }

}

export default Login;