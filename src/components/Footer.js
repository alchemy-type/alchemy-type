import Component from "./Component.js";

class Footer extends Component {
  renderTemplate() {
    return /*html*/ `
      <footer>
        <a href="./index.html"><button>Back Home</button></a>
      </footer>
    `;
  }
}

export default Footer;
