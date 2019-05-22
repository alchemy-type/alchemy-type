import PassageList from '../../components/PassageList.js';
console.log('passage-list');
const passageList = new PassageList();
const passageListDOM = passageList.render();

const root = document.getElementById('app');
root.appendChild(passageListDOM);