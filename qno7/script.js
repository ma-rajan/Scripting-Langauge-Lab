// ========================================
// JavaScript DOM - Student Result
// ========================================
function calculateResult() {
    // Get input values using DOM
    let name = document.getElementById("name").value.trim();
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);
    // Get result element using DOM
    let result = document.getElementById("result");
    // Validate student name
    if (name === "") {
        result.innerHTML = "Please enter student name.";
        return;
    }
    // Validate marks
    if (marksInput === "" || isNaN(marks)) {
        result.innerHTML = "Please enter valid marks.";
        return;
    }

    // Check marks range
    if (marks < 0 || marks > 100) {
        result.innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }
    // Determine Pass or Fail
    let status;

    if (marks >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    // Display result using DOM
    result.innerHTML =
        "<h2>Student Result</h2>" +
        "Name: " + name + "<br>" +
        "Marks: " + marks + "<br>" +
        "Result: <b>" + status + "</b>";
}