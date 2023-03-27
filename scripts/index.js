import { Card } from "./Card.js"
import { FormValidator } from "./FormValidator.js";
import { initialCards, formValidation } from "./cards.js";

const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupsCloseButtons = document.querySelectorAll(".popup__close-button");
const templateLikeButton = document.querySelectorAll(".button-like");

const profileUserName = document.querySelector(".profile__name");
const profileUserPosition = document.querySelector(".profile__position");
const popupProfileName = document.getElementById("name");
const popupProfileJob = document.getElementById("profession");

const formAddProfilePopup = document.querySelector(".popup__edit-form");

const popupProfileEdit = document.getElementById("profile_popup");
const popupAddPlace = document.getElementById("popup_add-place");
const popupPlaceName = document.getElementById("name-card");
const imageLinkPopup = document.getElementById("images");
const formAddPlacePopup = document.querySelector("#add-form");
const popupProfileAddButton = document.querySelector(".profile__add-button");
const popupCloseButtonImg = document.getElementById("close-button-add")

const cards = document.querySelector(".elements");
const templateCard = document.querySelector("#card__template").content;

const titleImagePopup = document.querySelector(".popup__photo-title");
const photoImagePopup = document.querySelector(".popup__photo");

const popupOpenImg = document.querySelector("#img-popup");
const ImgCloseButton = document.querySelector("#close-photo-card");

const buttonElement = formAddProfilePopup.querySelector(".popup__save-button");

const validatorEditProfile = new FormValidator(formValidation, formAddProfilePopup);
const validatorFormAddPlace = new FormValidator(formValidation, formAddPlacePopup);


function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); 
}

function closePopup (element) {
  element.classList.remove("popup_opened")
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup)
  }
}

function handlerOpenFormPopupProfile () {
  openPopup(popupProfileEdit)
  popupProfileName.value = profileUserName.textContent;
  popupProfileJob.value = profileUserPosition.textContent;
  validatorEditProfile.removeValidationErrors();
}
popupProfileOpenButton.addEventListener("click", handlerOpenFormPopupProfile)

function editProfile(eve) {
  eve.preventDefault();
  profileUserName.textContent = popupProfileName.value;
  profileUserPosition.textContent = popupProfileJob.value;
  handlerCloseFormPopupProfile ();
}
formAddProfilePopup.addEventListener("submit", editProfile);

popupsCloseButtons.forEach((button) => {
  const popupProfile=button.closest(".popup");
  button.addEventListener("click", () => closePopup(popupProfile));
});

function handlerCloseFormPopupProfile () {
  closePopup(popupProfileEdit)
  validatorEditProfile.disabledButton(formValidation);
}

function handlerOpenFormPopupAddPlace () {
  formAddPlacePopup.reset();
  openPopup(popupAddPlace);
  validatorFormAddPlace.removeValidationErrors()
}
popupProfileAddButton.addEventListener("click", handlerOpenFormPopupAddPlace);

function handlerCloseFormPopupAddPlace () {
  closePopup(popupAddPlace);
  validatorFormAddPlace.disabledButton(formValidation);
}

export function handlerOpenPopupImage (name, link) {
  const photo = photoImagePopup;
  photo.src = link;
  photo.alt = name;
  const title = titleImagePopup;
  title.textContent= name;
  openPopup(popupOpenImg);
}

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  const popups = popup.closest(".popup");
  const closePopupClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup)
    }
  };
  popups.addEventListener("click", closePopupClickOverlay)
});

function createCard (data, templateSelector) {
  const newCard = new Card (data, templateSelector);
  const cardElement = newCard.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  cards.append(createCard(item, "#card__template"));
});

formAddPlacePopup.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    name: popupPlaceName.value,
    link: imageLinkPopup.value,
  }
  handlerCloseFormPopupAddPlace();
  cards.prepend(createCard(userData, "#card__template"));
});

validatorEditProfile.enableValidation();
validatorFormAddPlace.enableValidation();