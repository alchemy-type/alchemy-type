import Component from "./Component.js";

class ErrorsStat extends Component {
  renderTemplate() {
    const errors = this.props.errors;
    return /*html*/ `
      <section class="stat">
        <label>Average # of Errors:</label>
        <p id="avg-error-count">${errors.toFixed(2)}</p>
      </section>
    `;
  }
}

export default ErrorsStat;
