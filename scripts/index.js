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
  editProfileModal.classList.add("openModal");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("closeModal");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("openModal");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("closeModal");
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
  editProfileModal.classList.remove("closeModal");
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

const addCardFormElement = document.querySelector(".add-card-form");
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
