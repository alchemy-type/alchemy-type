import Component from "./Component.js";

class PassageStat extends Component {
  renderTemplate() {
    const passages = this.props.passages;
    return /*html*/ `
      <section class="stat">
        <label>Passages Completed: </label>
        <p id="passages">${passages}</p>
      </section>
    `;
  }
}

export default PassageStat;
