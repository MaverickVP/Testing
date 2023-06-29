// Get the hamburger menu element
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Get the menu element
const menu = document.querySelector('.menu');

// Toggle the active class on click
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

// Check screen size on page load and resize
window.addEventListener('DOMContentLoaded', toggleMenu);
window.addEventListener('resize', toggleMenu);

function toggleMenu() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 900) {
    menu.classList.remove('active');
    hamburgerMenu.style.display = 'flex'; // Show the hamburger menu
  } else {
    menu.classList.add('active');
    hamburgerMenu.style.display = 'none'; // Hide the hamburger menu
  }
}