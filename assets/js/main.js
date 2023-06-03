////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////

const fedSlides = document.getElementById("fed-cards");
const vmSlides = document.getElementById("vm-cards");

const slide = document.querySelector(".slide");

const prevButton1 = document.getElementById("fed-btn-prev");
const nextButton1 = document.getElementById("fed-btn-next");

const prevButton2 = document.getElementById("vm-btn-prev");
const nextButton2 = document.getElementById("vm-btn-next");

//MOVING THE SCROLLBAR BY A FIXED LENGHT WHEN BUTTONS ARE PRESSED
//Projects, Front-End Developer buttons
nextButton1.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  fedSlides.scrollLeft += slideWidth;
});

prevButton1.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  fedSlides.scrollLeft -= slideWidth;
});

//Projects, Videomaker buttons
nextButton2.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  vmSlides.scrollLeft += slideWidth;
});

prevButton2.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  vmSlides.scrollLeft -= slideWidth;
});

////////////////////////////////////////////////////////////////////////////////