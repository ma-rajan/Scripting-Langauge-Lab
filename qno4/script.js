const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;
function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }
    document.getElementById("result").innerHTML =
        "Addition: " + add(a, b) + "<br>" +
        "Subtraction: " + subtract(a, b) + "<br>" +
        "Multiplication: " + multiply(a, b) + "<br>" +
        "Division: " + (b !== 0 ? divide(a, b) : "Cannot divide by zero") + "<br>" +
        "Modulus: " + (b !== 0 ? modulus(a, b) : "Cannot divide by zero");
}