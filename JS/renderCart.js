//Cart rendering logic


// Render cart items and total
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const subtotal = document.getElementById("subtotal");
const taxes = document.getElementById("taxes");
const deliveryFee = document.getElementById("deliveryFee");
const clearCartBtn = document.getElementById("clearCartBtn");

let delFee = 2.99; // Fixed delivery fee

// Function to calculate subtotal
function getCartSubTotal() {
  let subtotal = 0;
  const cart = getCart();
  for (const [id, qty] of Object.entries(cart)) {
    const p = MENU_ITEMS.find(x => x.id == id);
    if (p) subtotal += p.price * qty;
  }
  return subtotal.toFixed(2);
}

// Function to calculate total
function getCartTotal(subtotal, delFee, taxes) {
  let total = 0;
  total = parseFloat(subtotal) + parseFloat(delFee) + parseFloat(taxes);
  return total.toFixed(2);
}

// Function to calculate taxes
function getTaxes() {
  const taxRate = 0.07; // 7% tax rate
  const subtotal = parseFloat(getCartSubTotal());
  return (subtotal * taxRate).toFixed(2);
}

function renderCart() {
  const cart = getCart();
  const entries = Object.entries(cart);
  console.log(entries);

  if (!entries.length) {
    cartItems.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
    subtotal.textContent = "$0.00";
    deliveryFee.textContent = "$0.00";
    taxes.textContent = "$0.00";
    cartTotal.textContent = "$0.00";
    clearCartBtn.classList.add("hidden");
    return;
  }

  if(cartItems) {
    cartItems.innerHTML = entries.map(([id, qty]) => {
      const menuItem = MENU_ITEMS.find(x => x.id == id);
      console.log(menuItem);
      return `
        <div class="p-4">
          <div class="flex justify-between border-b pb-2 border-gray-300">
            <div>
              <p class="font-normal">${menuItem.name}</p>
              <p class="text-xs text-gray-500">$${menuItem.price} × ${qty}</p>
            </div>
            <p class="font-normal">$${menuItem.price * qty}</p>
          </div>
        </div>
      `;
    }).join("");
  }
  

  subtotal.textContent = `$${getCartSubTotal()}`;
  deliveryFee.textContent = `$${delFee.toFixed(2)}`;
  taxes.textContent = `$${getTaxes()}`;
  const totalAmount = getCartTotal(getCartSubTotal(), delFee, getTaxes());
  cartTotal.textContent = `$${totalAmount}`;
}

if(document.getElementById("clearCartBtn")){
  document.getElementById("clearCartBtn").onclick = () => {
      localStorage.removeItem("my_cart");
      renderCart();
      updateCartBadge();
  };  
}


// Update cart badge on cart page load
updateCartBadge();

// Render cart items on cart page load
renderCart();


