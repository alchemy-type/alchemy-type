import htmlToDOM from '../services/html-to-DOM.js';

class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    }

    render() {
        return this.renderDOM();
    }

    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        // remember the dom for later
        // for replacing or removing
        this.rootElement = dom;
        return dom;
    }

    renderTemplate() {
        throw new Error(`Component "${this.constructor.name}" needs to implement renderTemplate`);
    }

    update(props) {
        props = props || {};
        // update the props:
        Object.keys(props).forEach(key => {
            this.props[key] = props[key];
        });
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;