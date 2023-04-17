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
