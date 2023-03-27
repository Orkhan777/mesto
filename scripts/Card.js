import { handlerOpenPopupImage } from "./index.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

_getTemplate() {
  const cardElement = document
  .querySelector(this._templateSelector)
  .content
  .querySelector(".card")
  .cloneNode(true);

  return cardElement;
}

generateCard() {
  this._element = this._getTemplate();
  this._like = this._element.querySelector(".button-like");
  this._image = this._element.querySelector(".card__image")
  this._setEventListeners();

  this._image.style.backgroundImage =  `url(${this._link})`;
  this._element.querySelector(".card__title").textContent = this._name;

  return this._element;
}

_setEventListeners() {
  this._like.addEventListener("click", () => {
    this._handleLikeButton();
  });

  this._element.querySelector(".button-remove").addEventListener("click", () => {
    this._handleDeleteButton();
  });

  this._image.addEventListener("click", () => {
    handlerOpenPopupImage(this._name, this._link);
  });
}

_handleLikeButton() {
  this._like.classList.toggle("card__like_active")
}

_handleDeleteButton() {
  this._element.remove();
  this._element = null;
}

}