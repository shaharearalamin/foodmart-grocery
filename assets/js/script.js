$(document).ready(function () {
  // Simulate a 2-second loading time
  setTimeout(function () {
    $(".preloader-wrapper").fadeOut(); // Hide the preloader
    $("#content").fadeIn(); // Show the content
  }, 1000);
});

// owl carousel slider for hero seciton 
$(".heroBannerSliderWrapper").owlCarousel({
  // autoplay: true, // Automatically play the slider
  autoplayTimeout: 2000, // Time in milliseconds (e.g., 2000ms = 2 seconds)
  autoplayHoverPause: true, // Pause on hover
  loop: true, // Enable infinite loop
  margin: 10, // Space between items
  nav: false, // Show navigation arrows
  dots:true,
  responsive: {
    0: {
      items: 1, // 1 item on small screens
    },
    600: {
      items: 1, // 3 items on medium screens
    },
    1000: {
      items: 1, // 5 items on large screens
    },
  },
});
