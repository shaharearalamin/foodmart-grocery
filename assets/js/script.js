$(document).ready(function () {
  // Simulate a 2-second loading time
  setTimeout(function () {
    $(".preloader-wrapper").fadeOut(); // Hide the preloader
    $("#content").fadeIn(); // Show the content
  }, 100);
});
