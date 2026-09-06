<?php
session_start();
if (!isset($_SESSION["admin"])) {
    die("Access Denied");
}
include "db.php";
$id = $_GET["id"];
$result = mysqli_query($conn,"SELECT * FROM students WHERE id=$id");
$row = mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Update Student</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<h2>Update Student</h2>
<form method="post" action="index.php">
    <input type="hidden" name="id" value="<?= $row["id"] ?>">
    <input type="text" name="name" value="<?= $row["name"] ?>" required>
    <input type="email" name="email" value="<?= $row["email"] ?>" required>
    <input type="text" name="course" value="<?= $row["course"] ?>" required>
    <input type="submit" name="update" value="Update">
</form>
<br>
<a href="index.php">Back</a>
</div>
</body>
</html>