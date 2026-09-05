<!DOCTYPE html>
<html>
<head>
    <title>Name Sorter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Name Sorter</h1>
    <form method="post">
        <label>Enter Names:</label>
        <input type="text" name="names"
               placeholder="Ram, Sita, Hari" required>
        <button type="submit">Sort Names</button>
    </form>
    <div class="result">
        <?php
        function sortNames($input) {
            $names = explode(",", $input);
            $names = array_map('trim', $names);
            sort($names);
            return $names;
        }
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $input = $_POST["names"];
            $names = sortNames($input);
            echo "<p>Total Names: " . count($names) . "</p>";
            echo "<p>Sorted Names:</p>";
            echo "<ol>";
            foreach ($names as $name) {
                echo "<li>" . htmlspecialchars($name) . "</li>";
            }
            echo "</ol>";
        }
        ?>
    </div>
</div>
</body>
</html>