import Component from "./Component.js";
import Logo from "./Logo.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { onSubmitRegister } from "../pages/register/register.js";

import authApi from "../services/auth-api.js";

class Register extends Component {
  render() {
    const dom = this.renderDOM();

    const logo = new Logo();
    const logoDOM = logo.render();

    const footer = new Footer();
    const footerDOM = footer.render();

    authApi.checkAuth(data => {
      this.state.user = data;
      const header = new Header({ user: this.state.user });
      const headerDOM = header.render();
      dom.prepend(headerDOM);
    });

    const form = dom.querySelector("form");

    form.addEventListener("submit", event => {
      event.preventDefault();

      const formData = new FormData(form);

      const user = {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name")
      };

      onSubmitRegister(user);
    });

    const main = dom.querySelector("main");

    main.prepend(logoDOM);
    main.appendChild(footerDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main>
          <h1>Register</h1>
          <form id="register-form">
            <label>Email:</label>
            <input id="email" name="email" required>
            <label>Name:</label>
            <input id="name" name="name" maxlength="240">
            <label>Password:</label>
            <input id="password" name="password" type="password" required></input>
            <button>Submit</button>
          </form>
        </main>
      </div>
    `;
  }
}

export default Register;
