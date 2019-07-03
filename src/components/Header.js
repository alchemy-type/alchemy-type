import Component from "./Component.js";

import authApi from "../services/auth-api.js";

class Header extends Component {
  render() {
    const dom = this.renderDOM();

    const loginLogout = dom.querySelector(".login-logout");

    loginLogout.addEventListener("click", () => {
      if (this.props.user) {
        authApi.logout();
      }
    });

    return dom;
  }

  renderTemplate() {
    const user = this.props.user || {};
    return /*html*/ `
      <header>
        <h1>Alchemy Type</h1>
        <section class="user-header">
          <h2>${user.name || ""}</h2>
          <a class="login-logout" href='./login.html'>
            <h2>${user.email ? "Logout" : "Login"}</h2>
          </a>
        </section>
      </header>
    `;
  }
}

export default Header;
