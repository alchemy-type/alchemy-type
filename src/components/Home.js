import Component from './Component.js';
import Logo from './Logo.js';

class Home extends Component {

    render() {
        const homeDOM = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const main = homeDOM.querySelector('main');

        homeDOM.insertBefore(logoDOM, main);

        return homeDOM;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main></main>
            <section class="container">
                <a href="./passage-list.html"><button>Practice your typing!</button></a>
                <a href="./passage-form.html"><button>Add a new Passage!</button></a>
                <a href="./stats.html"><button>View your stats!</button></a>
            </section>
            <footer>
                <a href="./about-us.html"><button>About Us</button></a>
            </footer>
        </div>
    `;
    }

}

export default Home;