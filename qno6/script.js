function showAlert() {
    alert("Welcome to JavaScript!");
}
function showConfirm() {
    let answer = confirm("Do you want to continue?");
    if (answer) {
        document.getElementById("browserResult").innerHTML =
            "You clicked OK.";
    } else {
        document.getElementById("browserResult").innerHTML =
            "You clicked Cancel.";
    }
}
function showPrompt() {
    let name = prompt("Enter your name:");
    if (name !== null) {
        document.getElementById("browserResult").innerHTML =
            "Hello, " + name;
    }
}
let myWindow;
function openWindow() {
    myWindow = window.open(
        "",
        "MyWindow",
        "width=400,height=300"
    );

    myWindow.document.write(
        "<h2>New Window</h2>" +
        "<p>Window opened using JavaScript.</p>"
    );

    document.getElementById("windowResult").innerHTML =
        "Window opened successfully.";
}
function closeWindow() {

    if (myWindow && !myWindow.closed) {

        myWindow.close();

        document.getElementById("windowResult").innerHTML =
            "Window closed successfully.";
    }
}
function changeFrame() {
    document.getElementById("myFrame").src =
        "https://www.wikipedia.org/";
}