//Cart rendering logic


// Render cart items and total
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const subtotal = document.getElementById("subtotal");
const taxes = document.getElementById("taxes");
const deliveryFee = document.getElementById("deliveryFee");
const clearCartBtn = document.getElementById("clearCartBtn");

const menu_items = JSON.parse(localStorage.getItem("menu_items")) || [];

let delFee = 2.99; // Fixed delivery fee

// Function to calculate subtotal
function getCartSubTotal() {
  let subtotal = 0;
  const cart = getCart();
  for (const [id, qty] of Object.entries(cart)) {
    const p = menu_items.find(x => x.id == id);
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
      const menuItem = menu_items.find(x => x.id == id);
      console.log(menuItem);
      return `
       <div class="p-4">
          <div class="flex justify-between border-b pb-2 border-gray-300">
            <div>
              <p class="font-normal">${menuItem.name}</p>
              <p class="text-xs text-gray-500">$${menuItem.price} × ${qty}</p>
            </div>
            <div class="flex items-end">
              <p class="font-normal self-end pr-3">$${menuItem.price * qty}</p>
              <img src="Images/delete.png" alt="deletebutton" onclick="deleteItem('${id}')" class="w-7 h-7 object-cover mt-2 rounded">
            </div>
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
  JSON.stringify(localStorage.setItem("subtotal", getCartSubTotal()));
  JSON.stringify(localStorage.setItem("taxes", getTaxes()));
  JSON.stringify(localStorage.setItem("total_amount", getCartTotal(getCartSubTotal(), delFee, getTaxes())));
  
}

if(document.getElementById("clearCartBtn")){
  document.getElementById("clearCartBtn").onclick = () => {
      localStorage.removeItem("my_cart");
      renderCart();
      updateCartBadge();
  };  
}

// Function to delete item from cart
function deleteItem(itemId) {
  const cart = JSON.parse(localStorage.getItem("my_cart")) || {};
  if (cart[itemId]) {
    delete cart[itemId];
    localStorage.setItem("my_cart", JSON.stringify(cart));
    renderCart();
    updateCartBadge();
  }
} 

//function to checkout
function checkout() {
    // first check if user is logged in 
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if(!user) {
        const customAlertBox = document.getElementById("customAlertBox");
        customAlertBox.classList.remove("hidden");
        customAlertBox.querySelector("#alertTitle").textContent =`Please Login`;
        customAlertBox.querySelector("#alertMessage").textContent =
        `You are not logged in! Please log in to proceed.`;
        return;
     }    
    // check if cart is empty
    const cart = JSON.parse(localStorage.getItem("my_cart")) || {};
    if(Object.keys(cart).length === 0) {
        const customAlertBox = document.getElementById("customAlertBox");
        customAlertBox.classList.remove("hidden");
        customAlertBox.querySelector("#alertTitle").textContent =`Empty Cart`;
        customAlertBox.querySelector("#alertMessage").textContent =
        `Your cart is empty! Please add items to your cart before proceeding to checkout.`;
        return;
    }
    // if user is logged in and cart is not empty, proceed to checkout page
    window.location.href = "checkout.html";
}

//function to close alert box and either go to login page or if cart is empty go to menu page
function closeAlertBox() {
  const customAlertBox = document.getElementById("customAlertBox");
  customAlertBox.classList.add("hidden");
  document.getElementById("alertTitle").textContent === "Please Login" ? 
          window.location.href = "login.html" : window.location.href = "menu.html";
}


// Update cart badge on cart page load
updateCartBadge();

// Render cart items on cart page load
renderCart();


