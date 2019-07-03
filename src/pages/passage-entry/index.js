import PassageEntry from '../../components/PassageEntry.js';

const passageEntry = new PassageEntry();
const passageEntryDOM = passageEntry.render();

const root = document.getElementById('app');
root.appendChild(passageEntryDOM);