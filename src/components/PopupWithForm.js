import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector(".popup__form");
        this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
        this._button = this._form.querySelector(".popup__save-button");
    }

    _getInputValues() {
        const inputElement = {};
        this._inputs.forEach((input) => {
            inputElement [input.name] = input.value;
        });
        return inputElement;
    }

    close() {
        super.close();
        this._form.reset();
    }

    disableButton(text, disable = true) {
      this._button.disable = disable;
      this._button.textContent = text;
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }
}