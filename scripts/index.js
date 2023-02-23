const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfileCloseButton = document.querySelectorAll(".popup__close-button");
const templateLikeButton = document.querySelectorAll(".button-like");

const popupProfile = document.querySelector(".popup");
const popupName = document.querySelector(".profile__name");
const popupPosition = document.querySelector(".profile__position");
const popupProfileName = document.getElementById("popup__profile-name");
const popupProfileJob = document.getElementById("popup__profile-job");

const formAddProfilePopup = document.querySelector(".popup__edit-form");

const popupProfileEdit = document.getElementById("profile_popup");
const popupAddPlace = document.getElementById("popup_add-place");
const popupPlaceName = document.getElementById("popup__place-name");
const imageLinkPopup = document.getElementById("popup__place-link");
const formAddPlacePopup = document.querySelector("#add-form");
const popupProfileAddButton = document.querySelector(".profile__add-button");
const popupCloseButtonImg = document.getElementById("close-button-add")

const cards = document.querySelector(".elements");
const templateCard = document.querySelector("#card__template").content;

const titleImagePopup = document.querySelector(".popup__photo-title");
const photoImagePopup = document.querySelector(".popup__photo");

const popupOpenImg = document.querySelector("#img-popup");
const ImgCloseButton = document.querySelector("#close-photo-card");


function openPopup(element) {
  element.classList.add("popup_opened");
}

function closePopup (element) {
  element.classList.remove("popup_opened");
}

function handlerOpenFormPopupProfile () {
  openPopup(popupProfileEdit)
  popupProfileName.value = popupName.textContent;
  popupProfileJob.value = popupPosition.textContent;
}
popupProfileOpenButton.addEventListener("click", handlerOpenFormPopupProfile)


function editProfile(eve) {
  eve.preventDefault();
  popupName.textContent = popupProfileName.value;
  popupPosition.textContent = popupProfileJob.value;
  handlerCloseFormPopupProfile ();
}
formAddProfilePopup.addEventListener("submit", editProfile);

popupProfileCloseButton.forEach((button) => {
  const popupProfile=button.closest(".popup");
  button.addEventListener("click", () => closePopup(popupProfile));
});

function handlerCloseFormPopupProfile () {
  closePopup(popupProfileEdit)
}

function handlerOpenFormPopupAddPlace () {
  openPopup(popupAddPlace );
  formAddPlacePopup.reset();
}
popupProfileAddButton.addEventListener("click", handlerOpenFormPopupAddPlace);

function handlerCloseFormPopupAddPlace () {
  closePopup(popupAddPlace);
}

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
  handlerCloseFormPopupAddPlace()
  cards.prepend(newCard);
};
formAddPlacePopup.addEventListener("submit", (evt) => {
  handlerCreateCardFormPopupAdd(evt, popupPlaceName.value, imageLinkPopup.value);
});