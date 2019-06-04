import Component from './Component.js';

class PracticeTextEntry extends Component {

    render() {
        const dom = this.renderDOM();

        // const passage = this.props.passage;

        // const passageParent = dom.querySelector('#passage-characters');
        // let userInput = dom.querySelector('#passage-input');

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <section id="passage-characters"></section>
                <textarea id="passage-input" autofocus></textarea>
            </div>
        `;
    }

}

export default PracticeTextEntry;