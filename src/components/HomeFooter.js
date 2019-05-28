import Component from './Component.js';

class HomeFooter extends Component {

    renderTemplate() {
        return /*html*/`
        <footer>
            <a href="./about-us.html"><button class="transition-button">About Us</button></a>
        </footer>
    `;
    }

}

export default HomeFooter;