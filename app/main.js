import "./scss/style.scss";
import "./typeScales.css";

import menuOpenIcon from "./images/icon-hamburger.svg";
import menuCloseIcon from "./images/icon-close.svg";

const navtoggleButton = document.getElementById("navToggleButton");
const navigationLinks = document.querySelector(".navbar__links");
const navToggleIcon = document.querySelector(".navbar__toggle-icon");
const toggleLabel = document.querySelector(".toggle-label");
let hidden = true;

navtoggleButton.addEventListener("click", () => {
  if (hidden) {
    navigationLinks.classList.add("links-show");
    navtoggleButton.classList.add("is-active");
    navToggleIcon.setAttribute("src", menuCloseIcon);
    hidden = false;
    toggleLabel.textContent = "Close";
  } else {
    navigationLinks.classList.remove("links-show");
    // navtoggleButton.remove("is-active");
    navToggleIcon.setAttribute("src", menuOpenIcon);
    hidden = true;
    toggleLabel.textContent = "Open";
  }
});
