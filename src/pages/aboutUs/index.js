import AboutUs from '../../components/AboutUs.js';

const aboutUs = new AboutUs();
const aboutUsDOM = aboutUs.render();

const root = document.getElementById('app');
root.appendChild(aboutUsDOM);