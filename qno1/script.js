function displayMessage() {
    let name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("result").innerHTML =
            "Please enter your name.";
    } else {
        document.getElementById("result").innerHTML =
            "Hello, " + name + "! Keep going! You are doing great! 💪";
    }
}