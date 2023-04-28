import "./index.css"

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "../utils/cards.js";
import { apiSetting, formValidation } from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Popup from "../components/Popup.js";
import { Api } from "../components/Api.js"
import ConfirmationPopup from "../components/ConfirmationPopup.js";

import {
  popupProfileOpenButton, 
  popupProfileName, 
  popupProfileJob, 
  formAddProfilePopup, 
  popupPlaceName, 
  imageLinkPopup, 
  formAddPlacePopup, 
  popupProfileAddButton,
  cards, 
  cardsContainer,
  popupProfile,
  editAvatar,
  avatarImg,
} from "../utils/constants.js"


const validatorEditProfile = new FormValidator(formValidation, formAddProfilePopup);
validatorEditProfile.enableValidation();

const validatorFormAddPlace = new FormValidator(formValidation, formAddPlacePopup);
validatorFormAddPlace.enableValidation();

const validatorEditAvatar = new FormValidator(formValidation, editAvatar);
validatorEditAvatar.enableValidation();

const api = new Api (apiSetting);

Promise.all([api.getUserInfo(), api.getArrCards()])
.then (([userData, cardsData]) => {
  userProfile.setUserInfo (userData);
  userProfile.setUserAvatar (userData);
  defaultCard.rendererItems(cardsData);
})
.catch((err) => {
  console.error(`Ошибка: ${err}`);
});


const handlerPopupEditProfile = () => {
  const defaultUserData = userProfile.getUserInfo();
  popupProfileName.value = defaultUserData.name;
  popupProfileJob.value = defaultUserData.about;
  validatorEditProfile.removeValidationErrors();
  popupFormProfile.open();
}

const userProfile = new UserInfo ({
  nameSelector: formValidation.nameSelector,
  aboutSelector: formValidation.aboutSelector,
  avatarSelector: formValidation.avatarSelector,
});


const handlerFormSubmitEdit = (data) => {
  popupFormProfile.disableButton("Сохранение...");
  api.patchUserInfo(data)
  .then((res) => {
    userProfile.setUserInfo(res);
    popupFormProfile.close();
  })
  .catch((error) => {
    console.error(`Ошибка: ${error}`)
  })
  .finally(() => {
    popupFormProfile.disableButton("Сохранить", false);
  })
}

const handlerFormSubmitConfirmation = (cardId, newCard) => {
  confirmationPopup.disableButton("Удаление...");
  api.deleteCard (cardId)
  .then (() => {
    newCard.handlerDeleteButton();
    confirmationPopup.close()
  })
  .catch((error) => {
    console.error(`Ошибка: ${error}`)
  })
  .finally (() => {
    confirmationPopup.disableButton("Да", false);
  })
};

const addAvatar = (data) => {
  popupAddAvatar.disableButton("Сохранение...");
  api.patchAvatar(data)
  .then((res) => {
    userProfile.setUserAvatar(res);
    popupAddAvatar.close()
  })
  .catch((error) => {
    console.error(`Ошибка: ${error}`)
  })
  .finally(() => {
    popupAddAvatar.disableButton("Сохранить", false);
  })
};

function createCard (data) {
  const newCard = new Card 
  (data, 
  "#card__template",
  () => {
    popupZoomImage.open(data);
  },
  (cardId) => { 
    confirmationPopup.open(cardId, newCard)
  },
  () => {
    if (!newCard.checkMyLiked()) {
      api.putLike(data._id)
        .then((res) => {
          newCard.updateLikes(res);
        })
        .catch((error) => {
          console.error(`Ошибка putLike: ${error}`)
        })
    } else {
      api.deleteLike(data._id)
        .then((res) => {
          newCard.updateLikes(res);
        })
        .catch((error) => {
          console.error(`Ошибка deleteLike: ${error}`)
        })
    }
  },
  userProfile.getUserId()
  );
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

const addUserCard = (data) => {
  popupAddCard.disableButton("Сохранение...");
  api.postUserCard(data)
    .then((res) => {
      cards.prepend(createCard(res));
      popupAddCard.close();
    })
    .catch((error) => {
      console.error(`Ошибка: ${error}`)
    })
    .finally(() => {
      popupAddCard.disableButton("Сохранить")
    })
}

const popupFormProfile = new PopupWithForm(formValidation.popupProfile, handlerFormSubmitEdit);
popupFormProfile.setEventListeners();

const popupAddCard = new PopupWithForm (formValidation.popupAddCard, addUserCard);
popupAddCard.setEventListeners();

const popupZoomImage = new PopupWithImage(formValidation.popupZoom);
popupZoomImage.setEventListeners();

const confirmationPopup = new ConfirmationPopup (formValidation.popupDelete, handlerFormSubmitConfirmation);
confirmationPopup.setEventListeners();

const popupAddAvatar = new PopupWithForm (formValidation.popupAddAvatar, addAvatar);
popupAddAvatar.setEventListeners();


popupProfileOpenButton.addEventListener("click", handlerPopupEditProfile);
popupProfileAddButton.addEventListener("click", () => {
  popupAddCard.open();
  validatorFormAddPlace.removeValidationErrors();
});

avatarImg.addEventListener("click", () => {
  popupAddAvatar.open();
  validatorEditAvatar.removeValidationErrors();
});