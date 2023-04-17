const productsContainer = document.querySelector(".products");
const searchValue = document.querySelector("[data-search]");
const emptyMessage = document.createElement("h5");

emptyMessage.style.padding = "3rem 0";
emptyMessage.classList.add("text-center");
emptyMessage.textContent = "No hay productos disponibles";

if (window.innerWidth > 989) {
  emptyMessage.style.paddingBottom = "6rem";
}

const products = document.querySelectorAll(".product");

searchValue.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  let visibleProducts = 0;

  products.forEach((product) => {
    const productName = product
      .querySelector(".product__name")
      .textContent.toLowerCase();

    if (productName.includes(value) || value.length == 0) {
      product.classList.remove("d-none");
      product.classList.add("d-flex");
      visibleProducts++;
    } else {
      product.classList.remove("d-flex");
      product.classList.add("d-none");
    }
  });

  if (
    visibleProducts < 3 &&
    window.innerWidth > 767 &&
    window.innerWidth <= 989
  ) {
    productsContainer.classList.add("justify-content-center");
    productsContainer.classList.remove("justify-content-md-between");
    productsContainer.style.gap = "2rem";
  } else if (visibleProducts < 4 && window.innerWidth > 989) {
    productsContainer.classList.add("justify-content-center");
    productsContainer.classList.remove("justify-content-md-between");
    productsContainer.style.gap = "2rem";
  } else {
    productsContainer.classList.add("justify-content-md-between");
    productsContainer.style.gap = "0";
  }

  if (visibleProducts === 0) {
    productsContainer.appendChild(emptyMessage);
  } else {
    emptyMessage.remove();
  }
});

// Obtenemos los elementos del DOM que necesitamos
const testimoniosSection = document.getElementById("testimonios-comentarios");
const testimonyForm = document.getElementById("testimony-form");

// Función para crear un nuevo comentario
function createComment(name, occupation, photo, message) {
  // Creamos los elementos HTML necesarios
  const container = document.createElement("div");
  container.classList.add("container", "my-2");

  const row = document.createElement("div");
  row.classList.add("row");

  const col = document.createElement("div");
  col.classList.add("col-md-12");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const media = document.createElement("div");
  media.classList.add("media", "d-flex");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar", "align-self-center", "mr-3");

  const img = document.createElement("img");
  img.src = photo;
  img.alt = "Foto del usuario";
  img.classList.add("rounded-circle");

  const mediaBody = document.createElement("div");
  mediaBody.classList.add("media-body", "d-flex", "flex-column", "ms-2");

  const h5 = document.createElement("h5");
  h5.classList.add("mb-0");
  h5.textContent = name;

  const p1 = document.createElement("p");
  p1.classList.add("mb-0");
  p1.textContent = occupation;

  const p2 = document.createElement("p");
  p2.classList.add("mt-2");
  p2.textContent = message;

  // Agregamos los elementos al DOM
  testimoniosSection.appendChild(container);
  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(media);
  media.appendChild(avatar);
  avatar.appendChild(img);
  media.appendChild(mediaBody);
  mediaBody.appendChild(h5);
  mediaBody.appendChild(p1);
  cardBody.appendChild(p2);
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const name = event.target.name.value;
  const occupation = event.target.occupation.value;
  const photo = URL.createObjectURL(event.target.photo.files[0]);
  const message = event.target.message.value;

  // Creamos un nuevo comentario
  createComment(name, occupation, photo, message);

  // Reseteamos el formulario
  event.target.reset();
}

// Agregamos el listener al formulario
testimonyForm.addEventListener("submit", handleFormSubmit);
