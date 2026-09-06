function createCookie() {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("result").innerHTML =
            "Please enter a username.";
        return;
    }
    document.cookie =
        "username=" + encodeURIComponent(username) +
        "; max-age=86400; path=/";
    document.getElementById("result").innerHTML =
        "Cookie created successfully.";
}
function readCookie() {
    let cookies = document.cookie;
    let result = document.getElementById("result");
    if (cookies === "") {
        result.innerHTML = "No cookies found.";
        return;
    }
    let cookieValue = cookies
        .split("; ")
        .find(row => row.startsWith("username="));
    if (cookieValue) {
        let username = decodeURIComponent(
            cookieValue.substring("username=".length)
        );
        result.innerHTML =
            "Stored Username: " + username;
    } else {
        result.innerHTML =
            "Username cookie not found.";
    }
}

function updateCookie() {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("result").innerHTML =
            "Please enter a new username.";
        return;
    }
    document.cookie =
        "username=" + encodeURIComponent(username) +
        "; max-age=86400; path=/";
    document.getElementById("result").innerHTML =
        "Cookie updated successfully.";
}
function deleteCookie() {
    document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.getElementById("result").innerHTML =
        "Cookie deleted successfully.";
}