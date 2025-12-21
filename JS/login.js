// Login validation and submission

// Admin has a fixed email and password and can only use that to login
// Customer credentials are stored in localStorage during signup

const customAlertBox = document.getElementById("customAlert");

// Usertype -1 Customer, 2- Admin
let USER_TYPE = 1; // Default to Customer 

document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (USER_TYPE === 1) { // Customer login
        if (validateUser(email, password)) {
            loginUser();
        } else {
            errorMsg.textContent = "Invalid email or password.";
            errorMsg.classList.remove("hidden");
        }
    } 
    else if (USER_TYPE === 2) { // Admin login
        if (email === "admin@example.com" && password === "password") {
            loginAdmin();
        } else {
            errorMsg.textContent = "Invalid email or password.";
            errorMsg.classList.remove("hidden");
        }
    }
};

// Function to handle successful login
function loginUser() {
    const name = JSON.parse(localStorage.getItem("user"))?.name || "User";
    const email = JSON.parse(localStorage.getItem("user")).email;

    // Store current user data in localStorage so we can access it across pages
    const currentUser = {
        name: name,
        email: email,
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    const userlinks = document.getElementById("userlinks");
    const guestlinks = document.getElementById("guestlinks");

    customAlertBox.classList.remove("hidden");
    customAlertBox.querySelector("#boxMessage").textContent =
        `Welcome ${name}! \n     Login successful! You can now place your orders.`;

    // Update navigation links
    userlinks.classList.remove("hidden");
    userlinks.querySelector("#welcomeMsg").textContent = `Hello, ${name.split(" ")[0]}`;
    guestlinks.classList.add("hidden");
}

// Function to handle admin login
function loginAdmin() {
    const userlinks = document.getElementById("userlinks");
    const guestlinks = document.getElementById("guestlinks");

    customAlertBox.classList.remove("hidden");
    customAlertBox.querySelector("#boxMessage").textContent =
        `Welcome Admin! \n     Login successful!`;

    // Update navigation links
    userlinks.classList.remove("hidden");
    userlinks.querySelector("#welcomeMsg").textContent = `Hello, Admin`;
    guestlinks.classList.add("hidden");
    const currentUser = {
        name: "Admin",
        email: "admin@example.com",
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

// Function to validate user credentials
function validateUser(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        return true;
    }
    return false;
}

// Function to close the alert
function closeAlert() {
    customAlertBox.classList.add("hidden");
    // Redirect to admin page
    if(USER_TYPE === 2) {
        window.location.href = "admin.html";
    } else {     // Redirect to menu page if customer
        window.location.href = "menu.html";
    }
}

const buttonGroup = document.querySelector('.button-group');
const buttons = buttonGroup.querySelectorAll('.toggle-btn');

buttonGroup.addEventListener('click', (event) => {
    // Check if the clicked element is a button within the group
    if (event.target.classList.contains('toggle-btn')) {
        // 1. Remove 'active' class from all buttons
        buttons.forEach(button => {
            button.classList.remove('active');
            button.classList.add('bg-[#f7b613]');
            button.classList.remove('bg-[#805c03]');
        });

        // 2. Add 'active' class to the clicked button
        event.target.classList.add('active');
        // 3. Change background colors accordingly
        event.target.classList.add('bg-[#805c03]');
        event.target.classList.remove('bg-[#f7b613]');

        // Optional: Get the value of the clicked button
        USER_TYPE = parseInt(event.target.getAttribute('data-value'));
        if (USER_TYPE === 2) {
            document.getElementById("signUp").classList.add("hidden");
        }

    }
});


