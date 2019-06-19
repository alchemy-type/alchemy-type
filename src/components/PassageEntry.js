import Component from "./Component.js";
import Logo from "./Logo.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import PassageForm from "./PassageForm.js";

import authApi from "../services/auth-api.js";

class PassageEntry extends Component {
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

    const passageForm = new PassageForm();
    const passageFormDOM = passageForm.render();

    const main = dom.querySelector("main");

    main.prepend(logoDOM);
    main.appendChild(passageFormDOM);
    main.appendChild(footerDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>        
        <main class="container">
          <h1>Passage Form</h1>
        </main>
      </div>
      `;
  }
}

export default PassageEntry;
