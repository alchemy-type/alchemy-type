import Component from './Component.js';

class PassageLink extends Component {

    renderTemplate() {
        const passage = this.props.passage;

        const searchParams = new URLSearchParams();
        searchParams.set('id', passage.id);

        return /*html*/`
        <a class="passage-card" href="practice.html?${searchParams.toString()}">
            <p class="title">${passage.title}</p>
            <p class="description">${passage.description}</p>
        </a>
    `;
    }

}

export default PassageLink;