(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._id=e._id,this._likes=e.likes,this._ownerId=e.owner._id,this._templateSelector=n,this._handlerCardClick=r,this._handlerOpenConfirmationPopup=o,this._handleClickLike=i,this._userId=u,this._myLike=!1}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".card__button-like"),this._image=this._element.querySelector(".card__image"),this._delete=this._element.querySelector(".button-remove"),this._score=this._element.querySelector(".card__like-score"),this._arreyLike(),this._setEventListeners(),this._image.style.backgroundImage="url(".concat(this._link,")"),this._element.querySelector(".card__title").textContent=this._name,this._visualButtonDelete(),this._startPageLikes(),this._element}},{key:"_arreyLike",value:function(){this._score.textContent=this._likes.length}},{key:"checkMyLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"_zoomImageCard",value:function(){this._handlerCardClick(this._data)}},{key:"_visualButtonDelete",value:function(){this._userId===this._ownerId&&this._delete.classList.add("button-remove_show")}},{key:"updateLikes",value:function(t){this._likes=t.likes,this._score.textContent=t.likes.length,this.checkMyLiked()?console.log("true"):console.log("false"),this._toggleLikeButton()}},{key:"_startPageLikes",value:function(){this.checkMyLiked()&&this._like.classList.add("card__button-like_active")}},{key:"_toggleLikeButton",value:function(){this._like.classList.toggle("card__button-like_active")}},{key:"handlerDeleteButton",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._handleClickLike()})),this._image.addEventListener("click",(function(){t._zoomImageCard(t._id,t._myLike)})),this._delete.addEventListener("click",(function(){t._handlerOpenConfirmationPopup(t._id)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var a=i((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._config.inputErrorSelector),e.textContent=t.validationMessage,e.classList.add(r._config.errorClass)})),u(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._config.inputErrorSelector),e.classList.remove(r._config.errorClass),e.textContent=""})),u(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t)})),u(this,"disableButton",(function(){r._button.disabled="true",r._button.classList.add(r._config.disabledButtonSelector)})),u(this,"_deleteDisabledButton",(function(){r._button.disabled="",r._button.classList.remove(r._config.disabledButtonSelector)})),u(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),u(this,"_toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?r.disableButton(r._config):r._deleteDisabledButton(r._config)})),u(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),u(this,"removeValidationErrors",(function(){r._inputList.forEach((function(t){r._hideInputError(t)})),r.disableButton()})),u(this,"enableValidation",(function(){r._setEventListeners()})),this._formElement=n,this._config=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._button=this._formElement.querySelector(this._config.buttonSelector)})),l=document.querySelector(".profile__edit-button"),s=document.getElementById("name"),f=document.getElementById("profession"),p=document.querySelector(".popup__edit-form"),y=(document.getElementById("name-card"),document.getElementById("images"),document.querySelector("#add-form")),d=document.querySelector(".profile__add-button"),h=(document.querySelector(".elements"),document.querySelector(".form-edit-avatar")),v=document.querySelector(".profile__avatar"),b={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__save-button",disabledButtonSelector:"popup__save-button_disabled",inputErrorSelector:"popup__input-error",errorClass:"popup__span-error_active",popupAddCard:"#popup_add-place",popupProfile:"#profile_popup",avatarSelector:".profile__avatar",nameSelector:".profile__name",aboutSelector:".profile__position",popupZoom:"#img-popup",popupDelete:"#delete-card",templiteSelector:"#card__template",popupAddAvatar:"#add-avatar-popup"};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var S=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemStart",value:function(t){this._container.prepend(t)}},{key:"rendererItems",value:function(t){var e=this;t.forEach((function(t,n){e._renderer(t)}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var E=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=w(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__input")),n._button=n._form.querySelector(".popup__save-button"),n}return e=u,n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"close",value:function(){P(C(u.prototype),"close",this).call(this),this._form.reset()}},{key:"disableButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._button.disable=e,this._button.textContent=t}},{key:"setEventListeners",value:function(){var t=this;P(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())}))}}],n&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photo=e._popup.querySelector(".popup__photo"),e._title=e._popup.querySelector(".popup__photo-title"),e}return e=u,(n=[{key:"open",value:function(t){T(A(u.prototype),"open",this).call(this),this._photo.src=t.link,this._photo.alt=t.name,this._title.textContent=t.name}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var V=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=document.querySelector(n),this.about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,about:this.about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t._id;this.name.textContent=e,this.about.textContent=n,this._userId=r}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){if(t.ok)return t.json();Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._checkResponse)}},{key:"getArrCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"postUserCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"patchAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"putLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},H.apply(this,arguments)}function Z(t,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Z(t,e)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._button=n._form.querySelector(".popup__save-button"),n._handlerFormSubmit=e,n}return e=u,n=[{key:"open",value:function(t,e){H($(u.prototype),"open",this).call(this),this._cardId=t,this._card=e}},{key:"disableButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._button.disable=e,this._button.textContent=t}},{key:"setEventListeners",value:function(){var t=this;H($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handlerFormSubmit(t._cardId,t._card)}))}}],n&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Q=new a(b,p);Q.enableValidation();var W=new a(b,y);W.enableValidation();var X=new a(b,h);X.enableValidation();var Y=new N({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"170233ef-c23e-45e5-9660-e0df0b55c268","Content-Type":"application/json"}});Promise.all([Y.getUserInfo(),Y.getArrCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];tt.setUserInfo(o),tt.setUserAvatar(o),nt.rendererItems(i)})).catch((function(t){console.error("Ошибка: ".concat(t))}));var tt=new V({nameSelector:b.nameSelector,aboutSelector:b.aboutSelector,avatarSelector:b.avatarSelector});function et(t){var e=new n(t,b.templiteSelector,(function(){it.open(t)}),(function(t){ut.open(t,e)}),(function(){e.checkMyLiked()?Y.deleteLike(t._id).then((function(t){e.updateLikes(t)})).catch((function(t){console.error("Ошибка deleteLike: ".concat(t))})):Y.putLike(t._id).then((function(t){e.updateLikes(t)})).catch((function(t){console.error("Ошибка putLike: ".concat(t))}))}),tt.getUserId());return e.generateCard()}var nt=new S({renderer:function(t){var e=et(t);nt.addItem(e)}},".elements"),rt=new I(b.popupProfile,(function(t){rt.disableButton("Сохранение..."),Y.patchUserInfo(t).then((function(t){tt.setUserInfo(t),rt.close()})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){rt.disableButton("Сохранить",!1)}))}));rt.setEventListeners();var ot=new I(b.popupAddCard,(function(t){ot.disableButton("Сохранение..."),Y.postUserCard(t).then((function(t){nt.addItemStart(et(t)),ot.close()})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){ot.disableButton("Сохранить")}))}));ot.setEventListeners();var it=new x(b.popupZoom);it.setEventListeners();var ut=new G(b.popupDelete,(function(t,e){ut.disableButton("Удаление..."),Y.deleteCard(t).then((function(){e.handlerDeleteButton(),ut.close()})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){ut.disableButton("Да",!1)}))}));ut.setEventListeners();var ct=new I(b.popupAddAvatar,(function(t){ct.disableButton("Сохранение..."),Y.patchAvatar(t).then((function(t){tt.setUserAvatar(t),ct.close()})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){ct.disableButton("Сохранить",!1)}))}));ct.setEventListeners(),l.addEventListener("click",(function(){var t=tt.getUserInfo();s.value=t.name,f.value=t.about,Q.removeValidationErrors(),rt.open()})),d.addEventListener("click",(function(){ot.open(),W.removeValidationErrors()})),v.addEventListener("click",(function(){ct.open(),X.removeValidationErrors()}))})();
//# sourceMappingURL=main.js.map