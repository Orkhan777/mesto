import "./index.css"

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "../utils/cards.js";
import { formValidation } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Popup from "../components/Popup.js";

import {
  popupProfileOpenButton, 
  popupProfileName, 
  popupProfileJob, 
  formAddProfilePopup, 
  popupPlaceName, 
  imageLinkPopup, 
  formAddPlacePopup, 
  popupProfileAddButton, 
  cardsContainer
} from "../utils/constants.js"


const validatorEditProfile = new FormValidator(formValidation, formAddProfilePopup);
validatorEditProfile.enableValidation();

const validatorFormAddPlace = new FormValidator(formValidation, formAddPlacePopup);
validatorFormAddPlace.enableValidation();

const popupEditProfile = () => {
  const defaultUserData = userProfile.getUserInfo();
  popupProfileName.value = defaultUserData.userName;
  popupProfileJob.value = defaultUserData.userAbout;
  validatorEditProfile.removeValidationErrors();
  popupFormProfile.open();
}

const userProfile = new UserInfo ({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__position",
});


const handleFormSubmitEdit = (data) => {
  userProfile.setUserInfo({
    userName: data.name,
    userAbout: data.profession,
  });
}

function createCard (data) {
  const newCard = new Card (data, "#card__template", () => {
    popupZoomImage.open(data);
  })
  const cardElement = newCard.generateCard();
  return cardElement;
}

const defaultCard = new Section ({
  renderer: (item) => {
    const newCards = createCard (item);
    defaultCard.addItem(newCards);
  }
},
".elements")
defaultCard.rendererItems(initialCards);

const renderCard = (data) => {
  defaultCard.addItemStart(createCard(data));
}

const addUserCard = (data) => {
  const cardItem = {
    name: data.title,
    link: data.link,
  };
  renderCard(cardItem);
}

const popupFormProfile = new PopupWithForm("#profile_popup", handleFormSubmitEdit);
popupFormProfile.setEventListeners();

const popupAddCard = new PopupWithForm ("#popup_add-place", addUserCard);
popupAddCard.setEventListeners();

const popupZoomImage = new PopupWithImage("#img-popup");
popupZoomImage.setEventListeners();

popupProfileOpenButton.addEventListener("click", popupEditProfile);
popupProfileAddButton.addEventListener("click", () => {
  popupAddCard.open();
  validatorFormAddPlace.removeValidationErrors();
});