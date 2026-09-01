// ========================================
// HTML Form Validation
// JavaScript Client-Side Validation
// Regular Expression
// ========================================
function validateForm() {
    // Get values from form fields
    let title = document.getElementById("title").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let content = document.getElementById("content").value.trim();
    // Get result element
    let result = document.getElementById("result");
    // Regular Expression for email
    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Regular Expression for 10-digit phone number
    let phonePattern = /^[0-9]{10}$/;
    // Validate Title
    if (title === "") {
        result.innerHTML = "Please enter the title.";
        return false;
    }
    // Validate Email using Regular Expression
    if (!emailPattern.test(email)) {
        result.innerHTML = "Please enter a valid email address.";
        return false;
    }
    // Validate Phone using Regular Expression
    if (!phonePattern.test(phone)) {
        result.innerHTML =
            "Phone number must contain exactly 10 digits.";
        return false;
    }
    // Validate Content
    if (content.length < 10) {
        result.innerHTML =
            "Content must contain at least 10 characters.";
        return false;
    }
    // All validations successful
    result.innerHTML =
        "Form submitted successfully!";
    // Prevent actual form submission for demonstration
    return false;
}