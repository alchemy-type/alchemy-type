import Component from "./Component.js";
import Logo from "./Logo.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

import authApi from "../services/auth-api.js";

class AboutUs extends Component {
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

    const main = dom.querySelector("main");

    main.prepend(logoDOM);
    main.appendChild(footerDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main class="container">       
          <section class="contributor-container">
            <section class="box">
              <p class="name">Jack McConnell</p>
              <section class="icons-container">
                <a href="https://github.com/jwmcconnell"><img id="icons" src="/assets/logos/github.svg"
                  alt="github-logo"></a>
                <a href="https://www.linkedin.com/in/mcconnelljack/"><img id="icons"
                  src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                <a href="https://twitter.com/jackwmcconnell"><img id="icons" src="/assets/logos/twitter.svg"
                  alt="twitter-logo"></a>
              </section>
            </section>

            <section class="box">
              <p class="name">Danny Hogan</p>
              <section class="icons-container">
                <a href="https://github.com/dannyhogan"><img id="icons" src="/assets/logos/github.svg"
                  alt="github-logo"></a>
                <a href="https://www.linkedin.com/in/danny-hogan-3225b2183/"><img id="icons"
                  src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                <a href="https://twitter.com/_DannyHogan"><img id="icons" src="/assets/logos/twitter.svg"
                  alt="twitter-logo"></a>
              </section>
            </section>

            <section class="box">
              <p class="name">Eli Nicholson</p>
              <section class="icons-container">
                <a href="https://github.com/EmNicholson93"><img id="icons" src="/assets/logos/github.svg"
                  alt="github-logo"></a>
                <a href="https://www.linkedin.com/in/eli-nicholson-87806062/"><img id="icons"
                  src="/assets/logos/linkedin.svg" alt="linkedin-logo"></a>
                <a href="https://twitter.com/eli__nicholson"><img id="icons" src="/assets/logos/twitter.svg"
                  alt="twitter-logo"></a>
              </section>
            </section>
          </section>         
        </main>
    </div>
    `;
  }
}

export default AboutUs;
