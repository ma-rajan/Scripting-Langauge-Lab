
<!DOCTYPE html>
<html>
<head>
    <title>Leap Year Checker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>Leap Year Checker</h1>
    <form method="post">
        <label>Enter Year:</label>
        <input type="number" name="year" min="1000" max="9999" required>
        <button type="submit">Check</button>
    </form>
    <div class="result">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $year = $_POST["year"];

            if (($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)) {
                echo "<span class='success'>$year is a Leap Year.</span>";
            } else {
                echo "<span class='error'>$year is Not a Leap Year.</span>";
            }
        }
        ?>
    </div>
</div>
</body>
</html>