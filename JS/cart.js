// Cart functionality

function getCart() {
  console.log("Getting cart:",JSON.parse(localStorage.getItem("my_cart")));
  return JSON.parse(localStorage.getItem("my_cart")) || {};

}

function saveCart(cart) {
  localStorage.setItem("my_cart", JSON.stringify(cart));
}

function getCartCount() {
  return Object.values(getCart()).reduce((a, b) => a + b, 0);
}

function addToCart(id) {
  const cart = getCart();
  console.log(cart[id]);
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  const count = getCartCount();
  badge.textContent = count;
  badge.classList.toggle("hidden", count === 0);
}

// Initial update of cart badge on page load
updateCartBadge();

