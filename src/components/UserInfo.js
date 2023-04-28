export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this.name = document.querySelector(nameSelector);
    this.about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      about: this.about.textContent,
    };
  }

  setUserInfo({name, about, _id}) {
    this.name.textContent = name;
    this.about.textContent = about;
    this._userId = _id;
  }

  getUserId () {
    return this._userId;
  }

  setUserAvatar ({avatar}) {
    this._avatar.src = avatar;
  }
}