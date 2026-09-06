function calculateResult() {
    // Get the student name from the input field
    let name = document.getElementById("name").value.trim();
    // Get the marks entered by the student
    let marksInput = document.getElementById("marks").value;
    // Convert marks from string to number
    let marks = Number(marksInput);
    // Get the result div where output will be displayed
    let result = document.getElementById("result");

    // Check if the student name is empty
    if (name === "") {
        result.innerHTML = "Please enter student name.";
        return;
    }

    // Check if marks are empty or invalid
    if (marksInput === "" || isNaN(marks)) {
        result.innerHTML = "Please enter valid marks.";
        return;
    }

    // Check whether marks are within the valid range
    if (marks < 0 || marks > 100) {
        result.innerHTML = "Marks must be between 0 and 100.";
        return;
    }

    // Variable to store Pass or Fail
    let status;

    // Check whether the student has passed
    if (marks >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    // Display the result dynamically using DOM
    result.innerHTML =
        "<h2>Student Result</h2>" +
        "Name: " + name + "<br>" +
        "Marks: " + marks + "<br>" +
        "Result: <b>" + status + "</b>";
}