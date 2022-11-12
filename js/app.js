const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.navbar-links');
const btn_hire = document.querySelector('.hire-me');

responsiveMenuToggleButton.addEventListener('click', () => {
  btn_hire.classList.toggle('open');
  navBarLinks.classList.toggle('open');
  responsiveMenuToggleButton.classList.toggle('open');
});