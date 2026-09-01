// ========================================
// CRUD Operations on JavaScript Cookies
// ========================================
// CREATE - Create a new cookie
function createCookie() {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("result").innerHTML =
            "Please enter a username.";
        return;
    }
    // Store username in cookie for 1 day
    document.cookie =
        "username=" + encodeURIComponent(username) +
        "; max-age=86400; path=/";
    document.getElementById("result").innerHTML =
        "Cookie created successfully.";
}
// READ - Read the cookie
function readCookie() {
    let cookies = document.cookie;
    let result = document.getElementById("result");
    if (cookies === "") {
        result.innerHTML = "No cookies found.";
        return;
    }

    // Find the username cookie
    let cookieValue = cookies
        .split("; ")
        .find(row => row.startsWith("username="));
    if (cookieValue) {
        let username = decodeURIComponent(
            cookieValue.split("=")[1]
        );
        result.innerHTML =
            "Stored Username: " + username;
    } else {
        result.innerHTML = "Username cookie not found.";
    }
}
// UPDATE - Update the existing cookie
function updateCookie() {
  let username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("result").innerHTML =
            "Please enter a new username.";
        return;
    }
    // Setting the same cookie name updates its value
    document.cookie =
        "username=" + encodeURIComponent(username) +
        "; max-age=86400; path=/";

    document.getElementById("result").innerHTML =
        "Cookie updated successfully.";
}
// DELETE - Delete the cookie
function deleteCookie() {
    // Set the cookie expiration date to the past
    document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.getElementById("result").innerHTML =
        "Cookie deleted successfully.";
}