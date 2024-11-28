import "./style.css";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage";

homePage();

const tabRenderers = {
  home: homePage,
  menu: menuPage,
};

const handleClick = (event) => {
  cleanContent();
  const tabId = event.target.dataset.tab;
  if (tabRenderers[tabId]) {
    tabRenderers[tabId]();
  }
};

const cleanContent = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
};

const tabsButtons = document.querySelectorAll("#btn-container button");
tabsButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
