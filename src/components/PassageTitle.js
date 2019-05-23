import Component from './Component.js';

class PassageTitle extends Component {

    renderTemplate() {
        const title = this.props.title;
        return /*html*/`
            <h1 id="title">${title}</h1>
        `;
    }

}

export default PassageTitle;