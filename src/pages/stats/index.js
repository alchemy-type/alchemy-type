import Stats from '../../components/Stats.js';

const stats = new Stats();
const statsDOM = stats.render();

const root = document.getElementById('app');
root.appendChild(statsDOM);