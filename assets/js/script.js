$(document).ready(function () {
  setTimeout(function () {
    $(".preloader-wrapper").fadeOut(); 
    $("#content").fadeIn(); 
  }, 1000);
});

// owl carousel slider for hero seciton 
$(".heroBannerSliderWrapper").owlCarousel({
  autoplay: true, 
  autoplayTimeout: 2000, 
  autoplayHoverPause: true, 
  loop: true, 
  margin: 10, 
  nav: false,
  dots:true,
  responsive: {
    0: {
      items: 1, 
    },
    600: {
      items: 1, 
    },
    1000: {
      items: 1,
    },
  },
});
