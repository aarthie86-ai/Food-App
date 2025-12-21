

/* Function to display menu items on the menu page */
function displayMenuItems(item) {
    return `<div class="border rounded-lg w-60 shadow-sm hover:shadow-lg transition duration-200">
                <img src="${item.image}" alt="${item.name}" class="block w-60 h-40 object-cover mb-2 rounded-t-lg">
                <h3 class="text-md font-semibold m-2">${item.name}</h3>
                <p class="text-[#60605F] text-xs m-2">${item.description}</p>
                <b class="text-md font-semibold m-2">$${item.price.toFixed(2)}</b>
                <button data-add-id="${item.id}" id="deleteButton${item.id}" class="font-semibold float-right mr-2 bg-[#f7b613] w-14 h-7 rounded mb-2" onclick="showBox('${item.id}','${item.name}', '${item.image}')">
                        Delete
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
    const menu_items = JSON.parse(localStorage.getItem("menu_items")) || [];
    pizzaGrid.innerHTML = menu_items.filter(item => item.category === "Pizza").map(displayMenuItems).join("");
    pastaGrid.innerHTML = menu_items.filter(item => item.category === "Pasta").map(displayMenuItems).join("");
    saladsGrid.innerHTML = menu_items.filter(item => item.category === "Salad").map(displayMenuItems).join("");
    dessertsGrid.innerHTML = menu_items.filter(item => item.category === "Dessert").map(displayMenuItems).join("");
}

getMenuItems();

// Get references to the add button and the overlay message box
const boxContainer = document.getElementById('messageBox');

// Function to show the box
function showBox(itemId, itemName, itemImg) {
    deleteMenuItem(itemId);
    boxContainer.classList.remove('hidden');
    const imgElement = document.getElementById('boxImage');
    imgElement.src = itemImg;
    const boxMessage = document.getElementById('boxMessage');
    boxMessage.innerHTML = `${itemName} has been deleted from the menu!`;
}

// Function to delete menu item
function deleteMenuItem(itemId) {
    console.log("Deleting item with ID:", itemId);
    let menu_items = JSON.parse(localStorage.getItem("menu_items")) || [];
    menu_items = menu_items.filter(item => item.id != itemId);
    localStorage.setItem("menu_items", JSON.stringify(menu_items));
}

// Function to hide the box (used by the close button)
function closeMessageBox() {
  boxContainer.classList.add('hidden');
  window.location.href = "admin.html";
}