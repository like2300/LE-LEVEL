
const menuButton = document.getElementById('menu-button');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});
