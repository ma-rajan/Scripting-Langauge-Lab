<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Secure Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h2>Secure Web Page</h2>
    <p class="success">
        Welcome, <?php echo $_SESSION['username']; ?>!
    </p>
    <p>
        You have successfully logged in.
    </p>
    <p>
        This page is protected using PHP sessions.
    </p>
    <a href="logout.php">Logout</a>
</div>
</body>
</html>