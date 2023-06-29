<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $comment = $_POST["comment"];
  $email = $_POST["email"];

  // Validate the form data
  if (strlen($comment) < 25) {
    echo "Inquiry too short. Min 25 characters.";
    return;
  }

  // Send the email using PHPMailer
  try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->Username = 'rebelliousanalytics@gmail.com'; // Replace with your Gmail email address
    $mail->Password = 'wmvlnygwoizcxcpz'; // Replace with your Gmail app password
    $mail->setFrom($email);
    $mail->addAddress('rebelliousanalytics@gmail.com'); // Replace with the recipient email address
    $mail->Subject = 'New Comment';
    $mail->Body = "Comment: " . $comment . "\n\nEmail: " . $email;

    $mail->send();
    echo "Comment submitted successfully.";
  } catch (Exception $e) {
    echo "Error sending the comment. Error Info: " . $mail->ErrorInfo;
  }
}
?>
