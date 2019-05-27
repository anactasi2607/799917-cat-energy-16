var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var close = document.querySelector(".main-nav");

link.classList.remove("main-nav__toggle--nojs");
link.classList.add("main-nav__toggle--closed");
menu.classList.remove("site-list--nojs");
menu.classList.add("site-list--closed");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("site-list--closed")&&link.classList.contains("main-nav__toggle--closed")) {
    menu.classList.add("site-list--opened");
    menu.classList.remove("site-list--closed");
    link.classList.add("main-nav__toggle--opened");
    link.classList.remove("main-nav__toggle--closed");
  } else {
    menu.classList.add("site-list--closed");
    menu.classList.remove("site-list--opened");
    link.classList.add("main-nav__toggle--closed");
    link.classList.remove("main-nav__toggle--opened");
  }
});

