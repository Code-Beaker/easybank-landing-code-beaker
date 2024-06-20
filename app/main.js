import "./scss/style.scss";
import "./typeScales.css";

const navtoggleButton = document.getElementById("navToggleButton");
const navigationLinks = document.querySelector(".navbar__links");

navtoggleButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("links-show");
  navtoggleButton.classList.toggle("is-active");
});
