const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostButton = document.querySelector(".profile__plus-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleEditProfileFormSubmit(event) {
  event.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = addCardFormElement.querySelector("#card-title-input");
const linkInput = document.querySelector("#link-input");

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const cardTitle = addCardFormElement.querySelector("#card-title-input").value;
  const cardDescription = addCardFormElement.querySelector(
    "#card-description-input"
  ).value;

  if (cardTitle && cardDescription) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
      <h3 class="card__title">${cardTitle}</h3>
      <p class="card__description">${cardDescription}</p>
      <a href="${linkInput.value}" class="card__link">View More</a>
    `;
    document.querySelector(".cards-container").appendChild(newCard);
    addCardFormElement.reset();
  }
}

addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
