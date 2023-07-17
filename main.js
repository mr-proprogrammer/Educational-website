// !@@@@@@@@@@@@@@@@@@@@@@@@@@ NavBar scroll @@@@@@@@@@@@@@@@@@@@@@@@@@
window.addEventListener('scroll', () => {
  document
    .querySelector('.navbar')
    .classList.toggle('window-scroll', window.scrollY > 0);
});
//* @@@@@@@@@@@@@@@@@@@@@@@ Testimonial Swiper @@@@@@@@@@@@@@@@@

const swiper = new Swiper('.swiper', {
  // swipper js uses mobile first responsiveness first

  slidesPerView: 1,
  spaceBetween: 30,

  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // breakpoints

  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// !@@@@@@@@@@@@@@@@@@@@@@@@@@ Q/A @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('faq__open');
  });
});

// * toggle the plus and minus icons
const icons = document.querySelectorAll('.faq__icon i');

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
  });
});
// * toggle plus and minus ends here

// !@@@@@@@@@@@@@@@@@@@@@@@@@@ Q/A @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
