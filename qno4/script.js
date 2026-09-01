// Arrow functions for mathematical operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;

// Function called when Calculate button is clicked
function calculate() {
    // Get values from input fields
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    // Check whether both numbers are entered
    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }
    // Display results
    document.getElementById("result").innerHTML =
        "Addition: " + add(a, b) + "<br>" +
        "Subtraction: " + subtract(a, b) + "<br>" +
        "Multiplication: " + multiply(a, b) + "<br>" +
        "Division: " + (b !== 0 ? divide(a, b) : "Cannot divide by zero") + "<br>" +
        "Modulus: " + (b !== 0 ? modulus(a, b) : "Cannot divide by zero");
}