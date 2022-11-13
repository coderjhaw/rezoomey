const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.navbar-links');
const btn_hire = document.querySelector('.hire-me');

responsiveMenuToggleButton.addEventListener('click', () => {
  btn_hire.classList.toggle('open');
  navBarLinks.classList.toggle('open');
  responsiveMenuToggleButton.classList.toggle('open');
});


// jquery

// $(document).ready(function() {
//   var scroll_start = 0;
//   var startchange = $('header');
//   var offset = startchange.offset();


//   if (startchange.length) {
//     $(document).scroll(function () {
//         scroll_start = $(this).scrollTop();
//         if (scroll_start > offset.top) {
//             $("header").css('background-color', 'rgba(0,0,0,0.9)');
//             $("navbar-links").css('color', 'rgb(255,255,255)');
//         } else {
//             $("header").css('background-color', 'rgb(252, 255, 255)');
//         }
//     });
//   }

// });