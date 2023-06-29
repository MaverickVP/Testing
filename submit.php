<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $comment = $_POST["comment"];

  // Validate the form data
  if (strlen($comment) < 25) {
    echo "Inquiry too short. Min 25 characters.";
    return;
  }

  // Send the email
  $to = "rebelliousanalytics@gmail.com"; // Replace with your email address
  $subject = "New Comment";
  $message = "Name: " . $name . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Comment: " . $comment . "\n";
  $headers = "From: " . $email;

  if (mail($to, $subject, $message, $headers)) {
    echo "Comment submitted successfully.";
  } else {
    echo "Error sending the comment.";
  }
}
?>
