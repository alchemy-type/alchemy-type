import Component from "./Component.js";

class HomeNav extends Component {
  renderTemplate() {
    return /*html*/ `
      <section class="container">
        <a href="./login.html"><button>Login</button></a>
        <a href="./register.html"><button>Register</button></a>
      </section>
    `;
  }
}

export default HomeNav;
