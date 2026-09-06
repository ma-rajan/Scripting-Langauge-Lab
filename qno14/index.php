<!DOCTYPE html>
<html>
<head>
    <title>Send Email</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>Send Email</h1>
    <form method="post">
        <label>Recipient Email:</label>
        <input type="email" name="email" required>
        <label>Subject:</label>
        <input type="text" name="subject" required>
        <label>Message:</label>
        <textarea name="message" rows="6" required></textarea>
        <button type="submit" name="send">Send Email</button>
    </form>
    <div class="result">
        <?php
        if (isset($_POST["send"])) {

            $to = $_POST["email"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];

            if (mail($to, $subject, $message)) {
                echo "Email sent successfully.";
            } else {
                echo "Failed to send email.";
            }
        }
        ?>
    </div>
</div>
</body>
</html>

