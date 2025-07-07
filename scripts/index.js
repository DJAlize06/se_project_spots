consteditProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const newPostButton = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  newPostButton.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostCloseButton.classList.remove("modal_is-opened");
});
