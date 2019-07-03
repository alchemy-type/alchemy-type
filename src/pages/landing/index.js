import Landing from "../../components/Landing.js";

const landing = new Landing();
const landingDOM = landing.render();

const root = document.getElementById("app");
root.appendChild(landingDOM);
