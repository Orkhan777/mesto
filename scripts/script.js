//Открытие и закрытие popup
const aboutButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");

//Содержимое 

const profileName = document.querySelector(".profile__name");
const profilePosition = document.querySelector(".profile__position");

const inputName = document.querySelector("#popup__profile-name");
const inputAbout = document.querySelector("#popup__profile-job");

//Отрытие и закрытие

const handleAboutButtonClick = ()  => {
    popup.classList.add("popup_open");
    inputName.value = profileName.textContent;
    inputAbout.value =  profilePosition.textContent;
}

const handleCloseButtonClick = ()  => {
    popup.classList.remove("popup_open");
}
 
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = `${inputName.value}`;
    profilePosition.textContent = `${inputAbout.value}`;
    popup.classList.remove("popup_open");
}

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('submit', handleFormSubmit);

