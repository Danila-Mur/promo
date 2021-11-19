import Swiper, { Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import './index.sass';

document.addEventListener("DOMContentLoaded", function() { 

Swiper.use([ Pagination, Navigation]);

  new Swiper(".team__cards", {
    spaceBetween: 25,
    slidesPerView: 1,
    loop: true,
    // Pagination

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1201: {
        slidesPerView: 4
      },
      860: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 2
      }
    }
  })
});