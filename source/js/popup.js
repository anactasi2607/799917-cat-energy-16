var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".site-list");
var close = document.querySelector(".main-nav");

var form = document.querySelector(".filter");
var petName = document.querySelector(".questionnaire__name");
var petWeight = document.querySelector(".questionnaire__weight");
var ownerMail = document.querySelector(".owner__mail");
var ownerTel = document.querySelector(".owner__tel");


/*Для открытия-закрытия меню на мобильной версии*/
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

/*Для валидации формы подбора программы*/

form.addEventListener("submit", function (evt) {
  if (!ownerTel.value) {
    evt.preventDefault();
    ownerTel.classList.remove("error");
    ownerTel.classList.add("error");
    ownerTel.focus();
  }

  if (!ownerMail.value) {
    evt.preventDefault();
    ownerMail.classList.remove("error");
    ownerMail.classList.add("error");
    ownerMail.focus();
  }

  if (!petWeight.value) {
    evt.preventDefault();
    petWeight.classList.remove("error");
    petWeight.classList.add("error");
    petWeight.focus();
  }

  if (!petName.value) {
    evt.preventDefault();
    petName.classList.remove("error");
    petName.classList.add("error");
    petName.focus();
  }
});
