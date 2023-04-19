const popupProfileOpenButton = document.querySelector(".profile__edit-button");

const popupProfileName = document.getElementById("name");
const popupProfileJob = document.getElementById("profession");

const formAddProfilePopup = document.querySelector(".popup__edit-form");

const popupPlaceName = document.getElementById("name-card");
const imageLinkPopup = document.getElementById("images");
const formAddPlacePopup = document.querySelector("#add-form");
const popupProfileAddButton = document.querySelector(".profile__add-button");

const cardsContainer = document.querySelector(".elements");

const formValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
  disabledButtonSelector: "popup__save-button_disabled",
  inputErrorSelector: "popup__input-error",
  errorClass: "popup__span-error_active",
};

export {popupProfileOpenButton, popupProfileName, popupProfileJob, formAddProfilePopup, popupPlaceName, imageLinkPopup, formAddPlacePopup, popupProfileAddButton, cardsContainer, formValidation };