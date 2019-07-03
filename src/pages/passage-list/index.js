import PassageList from "../../components/PassageList.js";

const passageList = new PassageList();
const passageListDOM = passageList.render();

const root = document.getElementById("app");
root.appendChild(passageListDOM);
