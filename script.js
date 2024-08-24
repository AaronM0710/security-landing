// JavaScript can be used for interactive elements
// such as dropdown menus or modals.
// Here's an example of a simple script that could be used for a menu toggle.

document.addEventListener('DOMContentLoaded', function() {
    // Code for menu toggle
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
  
    menuIcon.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    });
  });