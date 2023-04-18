export { initialCards, formValidation };

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const formValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
  disabledButtonSelector: "popup__save-button_disabled",
  inputErrorSelector: "popup__input-error",
  errorClass: "popup__span-error_active",
};

const popupProfileOpenButton = document.querySelector(".profile__edit-button");

const popupProfileName = document.getElementById("name");
const popupProfileJob = document.getElementById("profession");

const formAddProfilePopup = document.querySelector(".popup__edit-form");

const popupPlaceName = document.getElementById("name-card");
const imageLinkPopup = document.getElementById("images");
const formAddPlacePopup = document.querySelector("#add-form");
const popupProfileAddButton = document.querySelector(".profile__add-button");

const cardsContainer = document.querySelector(".elements");

export {popupProfileOpenButton, popupProfileName, popupProfileJob, formAddProfilePopup, popupPlaceName, imageLinkPopup, formAddPlacePopup, popupProfileAddButton, cardsContainer}