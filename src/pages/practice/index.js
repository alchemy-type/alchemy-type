import Practice from '../../components/Practice.js';

const practice = new Practice();
const practiceDOM = practice.render();

const root = document.getElementById('app');
root.appendChild(practiceDOM);