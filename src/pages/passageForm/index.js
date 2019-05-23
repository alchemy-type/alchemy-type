import PassageForm from '../../components/PassageForm.js';

const passageForm = new PassageForm();
const passageFormDOM = passageForm.render();

const root = document.getElementById('app');
root.appendChild(passageFormDOM);