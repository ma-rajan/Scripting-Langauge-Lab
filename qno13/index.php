<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>File Upload</h1>
    <form method="post" enctype="multipart/form-data">
        <label>Select File:</label>
        <input type="file" name="myfile" required>
        <button type="submit" name="upload">Upload</button>
    </form>
    <div class="result">
        <?php
       if (isset($_POST["upload"])) {
    if ($_FILES["myfile"]["error"] != 0) {
        echo "Upload Error Code: " . $_FILES["myfile"]["error"];
    } else {
        $fileName = $_FILES["myfile"]["name"];
        $fileSize = $_FILES["myfile"]["size"];
        $fileType = $_FILES["myfile"]["type"];
        $fileTemp = $_FILES["myfile"]["tmp_name"];
        $folder = "uploads/";
        $filePath = $folder . $fileName;

        if (move_uploaded_file($fileTemp, $filePath)) {
            echo "File uploaded successfully.<br>";
            echo "File Name: $fileName<br>";
            echo "File Size: $fileSize bytes<br>";
            echo "File Type: $fileType";
        } else {
            echo "Could not save the file.";
        }
    }
}
  ?>
    </div>
</div>
</body>
</html>