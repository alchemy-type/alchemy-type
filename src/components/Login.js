import Component from './Component.js';

class Login extends Component {

    renderTemplate() {
        return /*html*/`
        <section>
            <header>
                <a href="./index.html"><img src="./assets/alchemy-type.png" id="logo"></a>
            </header>
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