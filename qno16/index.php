<?php
session_start();
include "db.php";
$admin = isset($_SESSION["admin"]);

/* CREATE */
if ($admin && isset($_POST["add"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $course = $_POST["course"];
    mysqli_query($conn,
        "INSERT INTO students(name,email,course)
         VALUES('$name','$email','$course')");
}

/* UPDATE */
if ($admin && isset($_POST["update"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $course = $_POST["course"];
    mysqli_query($conn,
        "UPDATE students SET name='$name', email='$email', course='$course' WHERE id=$id");
}

/* DELETE */
if ($admin && isset($_GET["delete"])) {
    $id = $_GET["delete"];
    mysqli_query($conn,"DELETE FROM students WHERE id=$id");
}
$edit = null;
if ($admin && isset($_GET["edit"])) {
    $id = $_GET["edit"];
    $result = mysqli_query($conn, "SELECT * FROM students WHERE id=$id");
    $edit = mysqli_fetch_assoc($result);
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<h2>Student Management System</h2>
<?php if ($admin) { ?>
    <?php if ($edit) { ?>
        <!-- UPDATE FORM -->
        <h3>Edit Student</h3>
        <form method="post">
            <input type="hidden" name="id" value="<?= $edit['id'] ?>">
            <input type="text"  name="name" value="<?= $edit['name'] ?>" required>
            <input type="email" name="email" value="<?= $edit['email'] ?>"  required>
            <input type="text" name="course"value="<?= $edit['course'] ?>"required>
            <button name="update">Update</button>
        </form>
        <br>
        <a href="index.php">Cancel</a>
    <?php } else { ?>

        <!-- CREATE FORM -->
        <form method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="course" placeholder="Course" required>
            <button name="add">Add Student</button>
        </form>
        <br>
        <a href="logout.php">Logout</a>
    <?php } ?>
<?php } else { ?>
    <p>Public User - View Only</p>
    <a href="login.php">Admin Login</a>
<?php } ?>

<!-- READ -->
<table>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Course</th>
    <?php if ($admin) { ?>
        <th>Action</th>
    <?php } ?>
</tr>
<?php
$result = mysqli_query($conn, "SELECT * FROM students");
while ($row = mysqli_fetch_assoc($result)) {
?>
<tr>
    <td><?= $row["id"] ?></td>
    <td><?= $row["name"] ?></td>
    <td><?= $row["email"] ?></td>
    <td><?= $row["course"] ?></td>
    <?php if ($admin) { ?>
    <td class="action">
        <a href="?edit=<?= $row["id"] ?>">
            Edit
        </a>
        <a href="?delete=<?= $row["id"] ?>"
           onclick="return confirm('Delete this record?')">
            Delete
        </a>
    </td>
    <?php } ?>
</tr>
<?php } ?>
</table>
</div>
</body>
</html>