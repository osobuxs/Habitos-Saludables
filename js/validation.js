const form = document.querySelector("#testimony-form");
const name = document.querySelector("#name");
const occupation = document.querySelector("#occupation");
const photo = document.querySelector("#photo");
const message = document.querySelector("#message");
const submitButton = document.querySelector("#form-testimonials");

function showError(field, message) {
  if (!field.classList.contains("is-invalid")) {
    field.classList.add("is-invalid");

    const messageError = document.createElement("div");
    messageError.className = "invalid-feedback";
    messageError.innerHTML = message;

    field.parentNode.insertBefore(messageError, field.nextSibling);
  } else {
    field.nextSibling.innerHTML = message;
  }
}

function removeError(field) {
  if (field && field.classList.contains("is-invalid")) {
    field.classList.remove("is-invalid");
    field.nextElementSibling.remove();
  }
}

function validateName() {
  if (name.value === "") {
    showError(name, "Por favor, ingrese su nombre");
  } else {
    removeError(name);
  }
}

function validateOccupation() {
  if (occupation.value === "") {
    showError(occupation, "Por favor, ingrese su ocupación");
  } else {
    removeError(occupation);
  }
}

function validatePhoto() {
  if (photo.files.length === 0) {
    showError(photo, "Por favor, suba una foto");
  } else {
    const file = photo.files[0];
    const fileSize = file.size / 1024 / 1024;

    if (!file.type.startsWith("image/")) {
      showError(photo, "Por favor, suba un archivo de imagen válido");
    } else if (fileSize > 2) {
      showError(photo, "Por favor, suba una imagen de menos de 2 MB");
    } else {
      removeError(photo);
    }
  }
}

function validateMessage() {
  if (message.value === "") {
    showError(message, "Por favor, ingrese su mensaje");
  } else {
    removeError(message);
  }
}

function validateForm() {
  validateName();
  validateOccupation();
  validatePhoto();
  validateMessage();

  if (form.querySelectorAll(".is-invalid").length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

name.addEventListener("blur", validateName);
occupation.addEventListener("blur", validateOccupation);
photo.addEventListener("blur", validatePhoto);
message.addEventListener("blur", validateMessage);
