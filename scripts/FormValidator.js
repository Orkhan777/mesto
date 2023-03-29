export class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._config = config;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._button = this._formElement.querySelector(this._config.buttonSelector);
  }

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorSelector);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorSelector);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  disableButton = () => {
    this._button.disabled = "true";
    this._button.classList.add(this._config.disabledButtonSelector);
  };

  _enableButton = () => {
    this._button.disabled = "";
    this._button.classList.remove(this._config.disabledButtonSelector);
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableButton(this._config);
    } else {
      this._enableButton(this._config);
    }
  };

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  removeValidationErrors = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}