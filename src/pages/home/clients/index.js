import Swiper, { Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import './index.sass';

document.addEventListener("DOMContentLoaded", function() { 

Swiper.use([ Pagination, Navigation]);

  new Swiper(".clients__slider", {
    spaceBetween: 25,
    slidesPerView: 1,
    loop: true,
    // Pagination

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      860: {
        slidesPerView: 2 
      }
    }
  })
})

  