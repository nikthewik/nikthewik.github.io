////////////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//OPENING AND CLOSING MOBILE NAV-MENU
//Click the hamburger icon...
hamburger.addEventListener("click", function(){

//...to add or remove "active" class from ".hamburger" and ".nav-menu".
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//CLOSING MOBILE NAV-MENU WHEN A NAV-LINK IS CLICKED
//Click the nav-links...
document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {

//...to remove "active" class from ".hamburger" and ".nav-menu".
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

////////////////////////////////////////////////////////////////////////////

const text = document.querySelector(".cap");

//TYPEWRITER EFFECT
//Text changes every 1.8s. After 20s the function repeats.
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Jr. Front-End Dev.";
  }, 0);
  setTimeout(() => {
    text.textContent = "Videomaker";
  }, 1700);
  setTimeout(() => {
    text.textContent = "Videoeditor";
  }, 3400);
  setTimeout(() => {
    text.textContent = "Photographer";
  }, 5100);
  setTimeout(() => {
    text.textContent = "From Another World";
  }, 6800);
}

textLoad();
setInterval(textLoad, 8500);

////////////////////////////////////////////////////////////////////////////