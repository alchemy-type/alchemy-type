import Component from './Component.js';

class Home extends Component {

    renderTemplate() {
        return /*html*/`
        <div>
            <section class="logo">
                <img id="logo" src="assets/alchemy-type.png">
            </section>
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