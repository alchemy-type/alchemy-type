import Component from './Component.js';
import makePassage from '../pages/passage-entry/make-passage.js';
import passageApi from '../services/passage-api.js';

class PassageForm extends Component {

    render() {
        const dom = this.renderDOM();

        dom.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(dom);
            formData.set('date', Date.now());
            const passage = makePassage(formData);
            passageApi.save(passage);
            window.location = './passage-list.html';
        });

        return dom;
    }

    renderTemplate() {

        return /*html*/`
        <form id="passage-form">
            <label>Title:</label>
            <input id="title" name="title" required>
            <label>Description:</label>
            <input id="description" name="description" maxlength="240">
            <label>Text:</label>
            <textarea id="content" name="content" placeholder="Type or insert your passage here." required></textarea>
            <label for="language">Language:</label>
            <select name="language" required>
                <option value="" hidden disabled selected>Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
            </select>
            <button>Submit</button>
        </form>
    `;
    }

}

export default PassageForm;