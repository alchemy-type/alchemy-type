import Component from "./Component.js";
import onSubmitLogin from "../pages/login/login.js";

class LoginForm extends Component {
  render() {
    const dom = this.renderDOM();

    const form = dom.querySelector("form");

    form.addEventListener("submit", event => {
      event.preventDefault();

      const formData = new FormData(form);

      const user = {
        email: formData.get("email"),
        password: formData.get("password")
      };
      onSubmitLogin(user, this.props.onProcessLogin);
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <section>
        <form id="login-form">
          <label>Email:</label>
          <input id="email" name="email" required>
          <label>Password:</label>
          <input id="password" name="password" type="password" required></input>
          <p class="login-error">${
            this.props.loginSuccess
              ? ""
              : "Email and password couldn`t be verified."
          }</p>
          <button>Submit</button>
        </form>
      </section>
    `;
  }
}

export default LoginForm;
