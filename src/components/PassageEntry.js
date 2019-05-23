import Component from './Component.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import PassageForm from './PassageForm.js';

class PassageEntry extends Component {

    render() {
        const dom = this.renderDOM();

        const logo = new Logo();
        const logoDOM = logo.render();

        const footer = new Footer();
        const footerDOM = footer.render();

        const passageForm = new PassageForm();
        const passageFormDOM = passageForm.render();

        dom.prepend(logoDOM);
        dom.appendChild(passageFormDOM);
        dom.appendChild(footerDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>        
            <h1>Passage Form</h1>
        </div>
        `;
    }

}

export default PassageEntry;