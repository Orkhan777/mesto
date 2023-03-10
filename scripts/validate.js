const formValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  disabledButtonSelector: 'popup__save-button_disabled',
  inputErrorSelector: 'popup__input-error',
  errorClass: 'popup__span-error_active',
};

const showError = (formValidation, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formValidation.inputErrorSelector);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(formValidation.errorClass);
};

const hiddenError = (formValidation, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(formValidation.inputErrorSelector);
    errorElement.classList.remove(formValidation.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formValidation, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formValidation, formElement, inputElement);
    } else {
      hiddenError(formValidation, formElement, inputElement);
  }
};

const setEventListeners = (formValidation, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(formValidation.inputSelector));
  const buttonElement = formElement.querySelector(formValidation.buttonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function() {
        checkInputValidity(formValidation, formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formValidation) => {
  const formList = Array.from(document.querySelectorAll(formValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formValidation, formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(formValidation, buttonElement);
  } else {
    deleteDisableButton(formValidation, buttonElement);
  }
};

const disableButton = (formValidation, buttonElement) => {
  buttonElement.disabled = 'true';
  buttonElement.classList.add(formValidation.disabledButtonSelector);
};
  
const deleteDisableButton = (formValidation, buttonElement) => {
  buttonElement.disabled = '';
  buttonElement.classList.remove(formValidation.disabledButtonSelector);
};
  
const removeValidationErrors = (formValidation, formElement) => {
  const inputElements = formElement.querySelectorAll(formValidation.inputSelector);
  inputElements.forEach((inputElement) => {
    hiddenError(formValidation, formElement, inputElement);
  });
};

enableValidation(formValidation);