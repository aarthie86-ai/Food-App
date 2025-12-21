// Code to get orders from localStorage and display them
document.addEventListener("DOMContentLoaded", function () {
    const orderGrid = document.getElementById("orderGrid");
    const orders = JSON.parse(localStorage.getItem("Orders")) || [];
    let htmlcode = '';

   const orderId = orders.orderId || 'N/A';
    if (orders.length === 0) {  
        document.getElementById("orderMessage").textContent = "No orders found.";
    } 
    else {
        orders.forEach(order => {
            const orderId = order.orderId || 'N/A';
            const orderDate = order.date || 'N/A';
            let totalPrice = 0;
            htmlcode += `<div class="border rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-200">
                        <h3 class="text-md font-semibold mb-2">Order ID: ${orderId}</h3>
                        <p class="text-sm text-gray-600 mb-2">Date: ${orderDate}</p>`;
            for(const itemId in order.items) {
                const qty = order.items[itemId] || 1;
                const menuItem = JSON.parse(localStorage.getItem("menu_items")).find(menuItem => menuItem.id == itemId) || {}; 
                console.log("Menu Item:", menuItem);
                const itemName = menuItem.name || 'N/A';
                const itemPrice = menuItem.price ? menuItem.price.toFixed(2) : 'N/A';
                totalPrice += menuItem.price ? (menuItem.price * qty) : 0;

                htmlcode += `

                        <h4 class="text-md font-semibold mb-1">Item: ${itemName}</h4>
                        <p class="text-sm text-gray-600 mb-1">Quantity: ${qty}</p></h4>
                `;
            }
            htmlcode += `
                        <b class="text-md font-semibold">Total: $${totalPrice}</b>
                        </div>`;
        });
        orderGrid.innerHTML = htmlcode;
    }
});