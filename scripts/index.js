
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const likeButton = document.querySelector(".button-like");

const popup = document.querySelector(".popup");
const userName = document.querySelector(".profile__name");
const userJob = document.querySelector(".profile__position");

const nameEdit = document.getElementById("popup__profile-name");
const profEdit = document.getElementById("popup__profile-job");

const editForm = document.querySelector(".popup__edit-form");

const addPlacePopup = document.getElementById("popup_add-place");
const nameCard = document.getElementById("popup__place-name");
const imagePopup = document.getElementById("popup__place-link");
const addForm = document.querySelector("#add-form");
const addButton = document.querySelector(".profile__add-button");
const closeButtonImg = document.getElementById("close-button-add")

const cards = document.querySelector(".elements");
const templateCard = document.querySelector("#card__template").content;

const titleImagePopup = document.querySelector(".popup__photo-title");
const photoImagePopup = document.querySelector(".popup__photo");

const popupImg = document.querySelector("#img-popup");
const closeImgButton = document.querySelector("#close-photo-card");

//Массив карточек из коробки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function openPopup () {
  popup.classList.add("popup_opened")
  nameEdit.value = userName.textContent;
  profEdit.value = userJob.textContent;
} 
editButton.addEventListener("click", openPopup);

function closePopup () {
  popup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

function editProfile (eve) {
  eve.preventDefault();
  userName.textContent = nameEdit.value;
  userJob.textContent = profEdit.value;
  closePopup ();
}
editForm.addEventListener("submit", editProfile);

function removeCard () {
  const cardDelete = document.querySelector(".card").remove();
}

function openPopupImg (name, link) {
  const photo = popupImg.querySelector(".popup__photo");
  photo.src = link;
  photo.all = name;
  const title = popupImg.querySelector(".popup__photo-title");
  title.textContent = name;
  popupImg.classList.add("popup_opened");
}

function closePopupImg () {
  popupImg.classList.remove("popup_opened");
}
closeImgButton.addEventListener("click", closePopupImg);

function createCard (name, link) {
  const newCard = templateCard.cloneNode(true);
  const cardTitle = newCard.querySelector(".card__title");
  cardTitle.textContent = name;
  const cardImg = newCard.querySelector(".card__image");
  cardImg.style.backgroundImage= `url(${link})`;
  const removeButton = newCard.querySelector(".button-remove");
  const likeButton = newCard.querySelector(".button-like");


  cardImg.addEventListener("click", () => {
    openPopupImg(name, link);
  });

  removeButton.addEventListener("click", function () {
    const cardDelete = removeButton.closest(".card");
    cardDelete.remove();
  });


  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like_active");
  });
  cards.prepend(newCard);
}

initialCards.forEach(function (elements) {
  createCard(elements.name, elements.link)
})

function formSubmitHandler (eve, name, link) {
  eve.preventDefault();
  createCard(name, link);
  closePopupForCard ()
};
addForm.addEventListener("submit", (evt) => {
  formSubmitHandler (evt, nameCard.value, imagePopup.value);
});

function openPopupForCard () {
  addPlacePopup.classList.add("popup_add-place");
  addForm.reset();
}
addButton.addEventListener("click", openPopupForCard);

function closePopupForCard() {
  addPlacePopup.classList.remove("popup_add-place");
}
closeButtonImg.addEventListener("click", closePopupForCard);
