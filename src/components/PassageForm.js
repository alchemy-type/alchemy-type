import Component from './Component.js';

class PassageForm extends Component {

    renderTemplate() {

        return /*html*/`
        <form id="passage-form">
            <label>Title:</label>
            <input id="title" name="title" required>
            <label>Description:</label>
            <input id="description" name="description" maxlength="240">
            <label>Text:</label>
            <textarea id="text" name="text" placeholder="Type or insert your passage here." required></textarea>
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