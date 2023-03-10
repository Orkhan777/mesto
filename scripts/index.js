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

const buttonElement = formAddProfilePopup.querySelector(".popup__save-button")


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
  removeValidationErrors(formValidation, formAddProfilePopup);
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
}

function handlerOpenFormPopupAddPlace () {
  formAddPlacePopup.reset();
  openPopup(popupAddPlace);
  enableValidation(formValidation);
  removeValidationErrors(formValidation, formAddPlacePopup);
}
popupProfileAddButton.addEventListener("click", handlerOpenFormPopupAddPlace);

function handlerOpenPopupImage (name, link) {
  const photo = photoImagePopup;
  photo.src = link;
  photo.alt = name;
  const title = titleImagePopup;
  title.textContent= name;
  openPopup(popupOpenImg);
}

function handlerClosePopupImage () {
  closePopup (popupOpenImg);
}

function createCard (name, link) {
  const newCard = templateCard.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = name;
  const cardImg = newCard.querySelector(".card__image");
  cardImg.style.backgroundImage= `url(${link})`;
  const removeButton = newCard.querySelector(".button-remove");
  const likeButton = newCard.querySelector(".button-like");
  
cardImg.addEventListener("click", () => {
  handlerOpenPopupImage(name, link);
})
removeButton.addEventListener("click", function () {
  const cardDelete = removeButton.closest(".card");
  cardDelete.remove();
});

likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("card__like_active");
});
 return newCard;
}

initialCards.forEach(function (element) {
  const newCard = createCard(element.name, element.link)
  cards.append(newCard);
});

function handlerCreateCardFormPopupAdd (eve, name, link) {
  eve.preventDefault();
  const newCard = createCard(name, link);
  cards.prepend(newCard);
  closePopup(popupAddPlace)
};
formAddPlacePopup.addEventListener("submit", (evt) => {
  handlerCreateCardFormPopupAdd(evt, popupPlaceName.value, imageLinkPopup.value);
});

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