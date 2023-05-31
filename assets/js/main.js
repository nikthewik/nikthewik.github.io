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