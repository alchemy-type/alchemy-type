import Component from "./Component.js";

class Logo extends Component {
  renderTemplate() {
    return /*html*/ `
      <section class="logo">
        <img id="logo" src="assets/alchemy-type.png">
      </section>
    `;
  }
}

export default Logo;
