// ========================================
// 1. ARRAY OBJECT
// ========================================

let fruits = ["Apple", "Mango", "Banana", "Orange"];

let arrayOutput =
    "Fruits: " + fruits.join(", ") + "<br>" +
    "Array Length: " + fruits.length + "<br>" +
    "First Fruit: " + fruits[0] + "<br>" +
    "Last Fruit: " + fruits[fruits.length - 1];


// ========================================
// 2. DATE OBJECT
// ========================================

let today = new Date();

let dateOutput =
    "Today's Date: " + today.toDateString() + "<br>" +
    "Current Year: " + today.getFullYear() + "<br>" +
    "Current Month: " + (today.getMonth() + 1) + "<br>" +
    "Current Day: " + today.getDate();


// ========================================
// 3. MATH OBJECT
// ========================================

let mathOutput =
    "Square Root of 25: " + Math.sqrt(25) + "<br>" +
    "Power of 2³: " + Math.pow(2, 3) + "<br>" +
    "Round 12.6: " + Math.round(12.6) + "<br>" +
    "Maximum of 10 and 20: " + Math.max(10, 20);


// ========================================
// 4. NUMBER OBJECT
// ========================================

let num = 123.4567;

let numberOutput =
    "Original Number: " + num + "<br>" +
    "Fixed to 2 Decimal Places: " + num.toFixed(2) + "<br>" +
    "Integer Part: " + Number.parseInt(num) + "<br>" +
    "Is Finite: " + Number.isFinite(num);


// ========================================
// 5. STRING OBJECT
// ========================================

let text = "JavaScript Programming";

let stringOutput =
    "Original String: " + text + "<br>" +
    "String Length: " + text.length + "<br>" +
    "Uppercase: " + text.toUpperCase() + "<br>" +
    "Lowercase: " + text.toLowerCase() + "<br>" +
    "First Character: " + text.charAt(0);


// ========================================
// DISPLAY OUTPUT
// ========================================

document.getElementById("result").innerHTML =

    "<div class='section'>" +
    "<h2>1. Array Object</h2>" +
    "<p>" + arrayOutput + "</p>" +
    "</div>" +

    "<div class='section'>" +
    "<h2>2. Date Object</h2>" +
    "<p>" + dateOutput + "</p>" +
    "</div>" +

    "<div class='section'>" +
    "<h2>3. Math Object</h2>" +
    "<p>" + mathOutput + "</p>" +
    "</div>" +

    "<div class='section'>" +
    "<h2>4. Number Object</h2>" +
    "<p>" + numberOutput + "</p>" +
    "</div>" +

    "<div class='section'>" +
    "<h2>5. String Object</h2>" +
    "<p>" + stringOutput + "</p>" +
    "</div>";