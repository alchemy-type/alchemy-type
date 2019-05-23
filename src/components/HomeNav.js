import Component from './Component.js';

class HomeNav extends Component {

    renderTemplate() {
        return /*html*/`
        <section class="container">
            <a href="./passage-list.html"><button>Practice your typing!</button></a>
            <a href="./passage-entry.html"><button>Add a new Passage!</button></a>
            <a href="./stats.html"><button>View your stats!</button></a>
        </section>
    `;
    }

}

export default HomeNav;