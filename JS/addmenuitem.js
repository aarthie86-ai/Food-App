// Functions to handle adding a new menu item
document.getElementById("addMenuItemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");
        
    const itemName = document.getElementById("itemName").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value).toFixed(2);
    const itemImage = document.getElementById("itemImage").value;
    const itemCategory = document.getElementById("itemCategory").value;
    const errorMsg = document.getElementById("errorMsg");

    // Basic validation for price
    if (isNaN(itemPrice) || itemPrice <= 0) {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Please enter a valid price.";
        return;
    }
    // Validation for image URL
    const lastBackslashIndex = itemImage.lastIndexOf('\\');
    let imageName = itemImage.substring(lastBackslashIndex + 1);

    if (!imageName.match(/\.(jpg|jpeg)$/i)) {

        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Please enter a valid image URL (jpg or jpeg).";
        return;
    } 

    // Adding Images/ prefix to the image name
    imageName = "Images/" + imageName;
    
    // Get existing menu items from localStorage
    const existingMenuItems = JSON.parse(localStorage.getItem("menu_items")) || [];   
    const id_num = existingMenuItems.length > 0 ? parseInt(existingMenuItems[existingMenuItems.length - 1].id) + 1 : 1;
    // Create new menu item object
    const newMenuItem = {
        
        id: id_num, // Unique ID based on timestamp
        name: itemName,
        description: itemDescription,
        price: parseFloat(itemPrice),
        image: imageName || "https://via.placeholder.com/150", // Default image if none provided
        category: itemCategory // Default category

    };

    existingMenuItems.push(newMenuItem);

    // Save updated menu items back to localStorage
    localStorage.setItem("menu_items", JSON.stringify(existingMenuItems));

    // Clear form fields
    document.getElementById("addMenuItemForm").reset();
    const messageBox = document.getElementById("messageBox");
    messageBox.classList.remove("hidden");
    messageBox.querySelector("#boxMessage").textContent = "Menu item added successfully!";

}
);

// Function to close the success message box
function closeMessageBox() {
    const messageBox = document.getElementById("messageBox");
    messageBox.classList.add("hidden");
    window.location.href = "admin.html";
}