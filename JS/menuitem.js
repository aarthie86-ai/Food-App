

/* Function to display menu items on the menu page */
function displayMenuItems(item) {
    return `<div class="border rounded-lg w-60 shadow-sm hover:shadow-lg transition duration-200">
                <img src="${item.image}" alt="${item.name}" class="block w-60 h-40 object-cover mb-2 rounded-t-lg">
                <h3 class="text-md font-semibold m-2">${item.name}</h3>
                <p class="text-[#60605F] text-xs m-2">${item.description}</p>
                <b class="text-md font-semibold m-2">$${item.price.toFixed(2)}</b>
                <button data-add-id="${item.id}"id="addButton${item.id}" class="font-semibold float-right mr-2 bg-[#f7b613] w-10 h-7 rounded mb-2" onclick="showBox('${item.name}', '${item.image}')">
                        Add
                </button>
            </div>
        `;
}

const pizzaGrid = document.getElementById("pizza-grid");
const pastaGrid = document.getElementById("pasta-grid");
const saladsGrid = document.getElementById("salads-grid");
const dessertsGrid = document.getElementById("desserts-grid");

// Function to get menu items and display them
function getMenuItems() {
    pizzaGrid.innerHTML = MENU_ITEMS.filter(item => item.category === "Pizza").map(displayMenuItems).join("");
    pastaGrid.innerHTML = MENU_ITEMS.filter(item => item.category === "Pasta").map(displayMenuItems).join("");
    saladsGrid.innerHTML = MENU_ITEMS.filter(item => item.category === "Salad").map(displayMenuItems).join("");
    dessertsGrid.innerHTML = MENU_ITEMS.filter(item => item.category === "Dessert").map(displayMenuItems).join("");
}

getMenuItems();

// Get references to the add button and the overlay message box
const addButton = document.getElementById('addButton');
const boxContainer = document.getElementById('boxContainer');

// Function to show the box
function showBox(itemName, itemImg) {
    boxContainer.classList.remove('hidden');
    const imgElement = document.getElementById('boxImage');
    imgElement.src = itemImg;
    const boxMessage = document.getElementById('boxMessage');
    boxMessage.innerHTML = `${itemName} has been added to your cart!`;
}

// Function to hide the box (used by the close button)
function closeBox() {
  boxContainer.classList.add('hidden');
}

//Event listener for add to cart button
document.addEventListener('click', function(event) {
    const btn = event.target.closest("[data-add-id]");
    if (btn)  addToCart(btn.dataset.addId);
});
