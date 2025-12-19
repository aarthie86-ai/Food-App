/* Check user login status and update UI accordingly
    This script should be included on pages where user login status needs to be reflected
    If a user is logged in, show user links(sign in button and cart) and hide guest links
    If no user is logged in, show guest links(Welcome message and logout button) 
    and hide user links

*/

document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userlinks = document.getElementById("userlinks");
    const guestlinks = document.getElementById("guestlinks");

    if (currentUser) { // User is logged in
        userlinks.classList.remove("hidden");
        userlinks.querySelector("#welcomeMsg").textContent = `Welcome, ${currentUser.name.split(" ")[0]}`;
        guestlinks.classList.add("hidden");
    } else { // User is not logged in
        userlinks.classList.add("hidden");
        guestlinks.classList.remove("hidden");
    }
});

// Function to logout user
function logout() {
    // Remove current user data from localStorage
    localStorage.removeItem("currentUser");
    
    const userlinks = document.getElementById("userlinks");
    const guestlinks = document.getElementById("guestlinks");

    // Toggle visibility of guest and user links
    userlinks.classList.add("hidden");
    guestlinks.classList.remove("hidden");

    // Redirect to home or login page
    window.location.href = "login.html";
}