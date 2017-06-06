$(function() {
  var detectMobile = function() {
    if(window.innerWidth <= 768) {
      return true;
    } else {
      return false;
    }
  };
  // Play video on full viewing size only
  if (!detectMobile()) {
    var navFadeIn = 200;
  } else {
    var navFadeIn = 20;
  }

  // Fade Scrollbar on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= navFadeIn) {
      $("nav").addClass("navfade navbar-default");
      $('nav').removeClass("navbar-transparent");
    }
    else{
      $("nav").removeClass("navfade navbar-default navbar-inverse");
      $('nav').addClass("navbar-transparent");
    }
  });
});
