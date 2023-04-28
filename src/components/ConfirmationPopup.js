import Popup from "./Popup.js";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, handlerFormSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._button = this._form.querySelector(".popup__save-button");
    this._handlerFormSubmit = handlerFormSubmit;
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }

  disableButton(text, disable = true) {
    this._button.disable = disable;
    this._button.textContent = text;
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
        e.preventDefault();
        this._handlerFormSubmit(this._cardId, this._card);
    });
  }
}