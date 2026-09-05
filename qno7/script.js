
function calculateResult() {
    let name = document.getElementById("name").value.trim();
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);M
    let result = document.getElementById("result");
    if (name === "") {
        result.innerHTML = "Please enter student name.";
        return;
    }
    if (marksInput === "" || isNaN(marks)) {
        result.innerHTML = "Please enter valid marks.";
        return;
    }

    if (marks < 0 || marks > 100) {
        result.innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }
    let status;

    if (marks >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    result.innerHTML =
        "<h2>Student Result</h2>" +
        "Name: " + name + "<br>" +
        "Marks: " + marks + "<br>" +
        "Result: <b>" + status + "</b>";
}