// Validating the signup form and storing the user data in localStorage

const customAlertBox = document.getElementById("customAlert");

document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("cnfPassword").value;
    const errorMsg = document.getElementById("errorMsg");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic validation
    if(!emailPattern.test(email)) { //email validation
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.classList.remove("hidden");
        return;
    }
    else if (password.length < 8) { //password length validation
        errorMsg.textContent = "Password must be at least 8 characters long.";
        errorMsg.classList.remove("hidden");
        return;
    }   
    else if (password !== confirmPassword) { //password match validation
        errorMsg.textContent = "Passwords do not match.";
        errorMsg.classList.remove("hidden");
        return;
    }

    // Store user data in localStorage
    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    displaySuccessAlert(customAlertBox);
}

// Function to display a custom alert box
function displaySuccessAlert(alertBox) {
    alertBox.classList.remove("hidden");
}

// Function to close the alert
function closeAlert() {
    customAlertBox.classList.add("hidden");
    // Redirect to login page
    window.location.href = "login.html";
}
