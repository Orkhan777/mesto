export class Card {
  constructor(data, templateSelector, handlerCardClick, handlerOpenConfirmationPopup, userId, handleClickLike) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handlerCardClick = handlerCardClick;
    this._handlerOpenConfirmationPopup = handlerOpenConfirmationPopup;
    this._handleClickLike = handleClickLike;
    this._userId = userId;
    this._myLike = false;
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
    this._like = this._element.querySelector(".card__like");
    this._image = this._element.querySelector(".card__image");
    this._delete = this._element.querySelector(".button-remove");
    this._score = this._element.querySelector(".card__like-score");
    this._arreyLike();
    this._setEventListeners();
    this._image.style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    this._visualButtonDelete();
    this._startPageLikes();
    return this._element;
  }

  _arreyLike() {
    this._score.textContent = this._likes.length;
  }

  checkMyLiked() {
    return this._likes.some(user => user._id === this._userId);
  }

  _zoomImageCard() {
    this._handlerCardClick(this._data);
  }

  _visualButtonDelete () {
    if (this._userId === this._ownerId) {
      this._delete.classList.add("button-remove_show");
    }
  }

  updateLikes(res) {
    this._likes = res.likes;
    this._score.textContent = res.likes.length;
    if (this.checkMyLiked()) {
      console.log("true");
    } else {
      console.log("false");
    }
    this._toggleLikeButton;
  }

  _startPageLikes() {
    const check = this.checkMyLiked();
    if (check) {
      this._like.classList.add("card__like_active");
    } else {
      this._like.classList.remove("card__like_active");
    }
  }

  _toggleLikeButton() {
    this._like.classList.toggle("card__like_active");
  }


  handlerDeleteButton() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {

    this._like.addEventListener("click", () => {
      this._handleClickLike();
    });

    this._image.addEventListener("click", () => {
      this._zoomImageCard(this._id, this._myLike);
    });

    this._delete.addEventListener("click", () => {
      this._handlerOpenConfirmationPopup(this._id);
    });
  }
}