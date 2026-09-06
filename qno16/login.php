<?php
session_start();
if (isset($_POST["login"])) {
    if ($_POST["username"] == "admin" &&
        $_POST["password"] == "1234") {
        $_SESSION["admin"] = true;
        header("Location: index.php");
    } else {
        $error = "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h2>Admin Login</h2>
    <?php if (isset($error)) echo "<p>$error</p>"; ?>
    <form method="post">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button name="login">Login</button>
    </form>
</div>
</body>
</html>