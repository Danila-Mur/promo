import './header.sass';

document.addEventListener("DOMContentLoaded", function() { 

  const $burger = $(".js-burger");
  const $burgerItem = $burger.find(".header__burger-item");
  const $menu = $(".js-open-nav");
  
  $(window).on('resize', function() {
    if ($(document).outerWidth() > 768) {
      $menu.css("display", "");
      $burgerItem.hasClass("header__burger-item--open")
        ? $burgerItem.removeClass("header__burger-item--open")
        : null;
    }
  });
  
  $burger.on("click", function() {
    $menu.slideToggle();
    $burgerItem.toggleClass("header__burger-item--open");
    if($burgerItem.hasClass("header__burger-item--open")) {
      $("main").animate({
        paddingTop: "200px"
      });
    } else {
      $("main").animate({
        paddingTop: "0"
      });
    }
  });
  
});