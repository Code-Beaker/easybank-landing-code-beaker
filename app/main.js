import "./scss/style.scss";
import "./typeScales.css";

const navtoggleButton = document.getElementById("navToggleButton");
const navigationLinks = document.querySelector(".navbar__links");
const navigationToggleIcon = document.querySelector(".navbar__toggle-icon");

navtoggleButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("links-show");
});
