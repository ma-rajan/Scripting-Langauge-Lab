function validateForm() {
    let title = document.getElementById("title").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let content = document.getElementById("content").value.trim();
    let result = document.getElementById("result");
    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let phonePattern = /^[0-9]{10}$/;
    if (title === "") {
        result.innerHTML = "Please enter the title.";
        return false;
    }

    if (!emailPattern.test(email)) {
        result.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (!phonePattern.test(phone)) {
        result.innerHTML =
            "Phone number must contain exactly 10 digits.";
        return false;
    }

    if (content.length < 10) {
        result.innerHTML =
            "Content must contain at least 10 characters.";
        return false;
    }

    result.innerHTML =
        "Form submitted successfully!";

    return false;
}