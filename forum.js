// Add JavaScript to show the confirmation box after form submission
const form = document.querySelector('.contact-form');
const confirmationBox = document.getElementById('confirmation-box');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Validate form before showing the confirmation box
  if (!validateForm()) {
    return; // Exit if form validation fails
  }

  // Send form data via AJAX request
  sendFormData();

  // Show the confirmation box
  confirmationBox.style.display = 'block';

  // Reset the form fields
  form.reset();

  // Hide the confirmation box after 3 seconds
  setTimeout(function() {
    confirmationBox.style.display = 'none';
  }, 3000);
});

function validateForm() {
  var comment = document.getElementById("comment").value;
  var commentError = document.getElementById("comment-error");

  if (comment.length < 25) {
    commentError.innerText = "Inquiry too short. Min 25 characters.";
    return false;
  } else {
    commentError.innerText = "";
    return true;
  }
}

function sendFormData() {
  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const inquiry = document.getElementById("inquiry").value;
  const comment = document.getElementById("comment").value;

  // Create an object with the form data
  const formData = {
    name: name,
    email: email,
    inquiry: inquiry,
    comment: comment
  };

  // Make an AJAX request to the PHP script
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText); // Log the response from the PHP script
        // Display success message or perform any additional actions
      } else {
        console.error("Error sending form data.");
        // Display error message or perform any error handling
      }
    }
  };
  xhr.send(JSON.stringify(formData));
}
