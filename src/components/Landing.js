import Component from "./Component.js";
import Header from "./Header.js";
import Logo from "./Logo.js";
import LandingNav from "./LandingNav.js";
import authApi from "../services/auth-api.js";

class Landing extends Component {
  render() {
    const dom = this.renderDOM();

    authApi.checkAuth(data => {
      this.state.user = data;
      const header = new Header({ user: this.state.user });
      const headerDOM = header.render();
      dom.prepend(headerDOM);
    });

    const logo = new Logo();
    const logoDOM = logo.render();

    const landingNav = new LandingNav();
    const landingNavDOM = landingNav.render();

    const main = dom.querySelector("main");

    main.appendChild(logoDOM);
    main.appendChild(landingNavDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main></main>
      </div>
    `;
  }
}

export default Landing;
