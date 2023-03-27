export class FormValidator {
    constructor(data, formElement) {
      this._formElement = formElement;
      this._data = data,
      this._input = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
      this._button = this._formElement.querySelector(this._data.buttonSelector);
    };

    _showInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._data.inputErrorSelector);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._data.errorClass);
    };

    _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._data.inputErrorSelector);
      errorElement.classList.remove(this._data.errorClass);
      errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      }else {
        this._hideInputError(inputElement)
      }
    };

    disabledButton = (data) => {
      this._button.disabled = "true";
      this._button.classList.add(data.disabledButtonSelector);
    }

    _deleteDisabledButton = (data) => {
      this._button.disabled = '';
      this._button.classList.remove(data.disabledButtonSelector);
    }

    _hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    _toggleButtonState = (inputList) => {
      if(this._hasInvalidInput(inputList)) {
        this.disabledButton(this._data);
      } else {
        this._deleteDisabledButton (this._data);
      }
    }

    _setEventListeners = (inputList) => {
      this._toggleButtonState(inputList);
      this._input.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(inputList);
        });
      });
    };

    removeValidationErrors = () => {
      this._input.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }

    enableValidation = () => {
      this._setEventListeners(this._input);
    }
}