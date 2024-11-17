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
// owl carousel slider for hero seciton 

// catergory owl carousel slider 
$(document).ready(function(){
  // Initialize Owl Carousels for multiple sliders
  $(".categorySliderWrapper").each(function() {
    var owl = $(this); // Each individual carousel

    owl.owlCarousel({
      items: 1, // Default to 1 item
      loop: true,
      margin: 10,
      nav: false, // Disable default nav
      dots: false, // Disable dots
      responsive: {
        0: {
          // For screens 0px to 600px
          items: 1,
        },
        600: {
          // For screens 600px to 1000px
          items: 3,
        },
        900: {
          // For screens 1000px and above
          items: 4,
        },
        1200: {
          // For screens 1000px and above
          items: 6,
        },
      },
    });
  });

  // Custom next and prev button functionality
  $(".owl-nextCategory, .owl-prevCategory").click(function () {
    var target = $(this).data("target"); // Get the target slider (e.g., category1, category2)
    var owl = $("." + target); // Select the corresponding owl-carousel based on the target

    if ($(this).hasClass("owl-nextCategory")) {
      owl.trigger("next.owl.carousel");
    } else if ($(this).hasClass("owl-prevCategory")) {
      owl.trigger("prev.owl.carousel");
    }
  });
});

// catergory owl carousel slider 

// Brand owl carousel slider 
$(document).ready(function(){
  // Initialize Owl Carousels for multiple sliders
  $(".BrandSliderWrapper").each(function () {
    var owl = $(this); // Each individual carousel

    owl.owlCarousel({
      items: 1, // Default to 1 item
      loop: true,
      margin: 10,
      nav: false, // Disable default nav
      dots: false, // Disable dots
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  // Custom next and prev button functionality
  $(".owl-nextBrand, .owl-prevBrand").click(function () {
    var target = $(this).data("target"); // Get the target slider (e.g., category1, category2)
    var owl = $(this)
      .closest(".container-fluid")
      .find("." + target); // Find the specific owl-carousel in the same section

    if ($(this).hasClass("owl-nextBrand")) {
      owl.trigger("next.owl.carousel");
    } else if ($(this).hasClass("owl-prevBrand")) {
      owl.trigger("prev.owl.carousel");
    }
  });
});

// Brand owl carousel slider 