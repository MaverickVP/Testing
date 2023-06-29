// JavaScript
const boxes = document.querySelectorAll('.box');
const modal = document.querySelector('.image-modal');
const modalImage = document.querySelector('.image-modal img');
const closeButton = document.querySelector('.close-button');

// Add click event listeners to each box
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    const imageSrc = box.querySelector('img').getAttribute('src');
    modalImage.setAttribute('src', imageSrc);
    modal.style.display = 'block';
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicked outside the image or close button
modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target === closeButton) {
    modal.style.display = 'none';
  }
});
