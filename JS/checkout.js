// Validate checkout form before submission and place order
document.getElementById("checkoutForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("zipCode").value.trim();

    const errorMsg = document.getElementById("checkoutErrorMsg");

    const cardHolderName = document.getElementById("cardholderName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expDate = document.getElementById("expDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();



    // calling valdiation functions
    if (validateName(name, errorMsg) && validatePhone(phone, errorMsg) && validateEmail(email, errorMsg)
        && validateCity(city, errorMsg) && validatePostalCode(postalCode, errorMsg) && 
        validateCardHolderName(cardHolderName, errorMsg) && validateCardNumber(cardNumber, errorMsg) 
        && validateExpDate(expDate, errorMsg) && validateCVV(cvv, errorMsg)) {
        placeOrder();

    }
};

// Function to validate name
function validateName(name, errorMsg) {
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name) || name.length < 2) {
        errorMsg.textContent = "Please enter a valid name.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate phone number
function validatePhone(phone, errorMsg) {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        errorMsg.textContent = "Please enter a valid 10-digit phone number.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate email
function validateEmail(email, errorMsg) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate city
function validateCity(city, errorMsg) {
    if (city.length < 2) {
        errorMsg.textContent = "Please enter a valid city.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate postal code
function validatePostalCode(postalCode, errorMsg) {
    const postalCodePattern = /^\d{5}$/;
    if (!postalCodePattern.test(postalCode)) {
        errorMsg.textContent = "Please enter a valid 5-digit zip code.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate card holder name
function validateCardHolderName(cardHolderName, errorMsg) {
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(cardHolderName) || cardHolderName.length < 2) {
        errorMsg.textContent = "Please enter a valid card holder name.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate card number
function validateCardNumber(cardNumber, errorMsg) {
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        errorMsg.textContent = "Please enter a valid 16-digit card number.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate expiration date
function validateExpDate(expDate, errorMsg) {
    const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expDatePattern.test(expDate)) {
        errorMsg.textContent = "Please enter a valid expiration date in MM/YY format.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to validate CVV
function validateCVV(cvv, errorMsg) {
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
        errorMsg.textContent = "Please enter a valid 3-digit CVV.";
        errorMsg.classList.remove("hidden");
        return false;
    }
    return true;
}

// Function to place order
function placeOrder() {
    // Clear the cart
    localStorage.removeItem("my_cart");

    // Redirect to order confirmation page
    window.location.href = "orderConfirmation.html";
}

// Update cart badge on checkout page load
document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
});

