//Открытие и закрытие popup
const aboutButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");
const editForm = document.querySelector(".popup__form")

//Содержимое 

const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");

const inputName = document.querySelector("#popup__profile-name");
const inputAbout = document.querySelector("#popup__profile-job");

//Отрытие и закрытие

const handleAboutButtonClick = ()  => {
    popup.classList.add("popup_opened");
    inputName.value = profileName.textContent;
    inputAbout.value =  profilePosition.textContent;
}

const handleCloseButtonClick = ()  => {
    popup.classList.remove("popup_opened");
}
 
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = `${inputName.value}`;
    profilePosition.textContent = `${inputAbout.value}`;
    handleCloseButtonClick();
}

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
editForm.addEventListener('submit', handleFormSubmit);

