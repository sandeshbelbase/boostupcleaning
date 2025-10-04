$(document).ready(function () {
  $(".slider-wrapper").slick({
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1000, // Set auto-play speed (in ms)
    dots: false, // Show navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
  });
});

$(document).ready(function () {
  $(".MS-content").slick({
    autoplay: true, // Enable auto-play
    autoplaySpeed: 900, // Set auto-play speed (in ms)
    dots: true, // Show navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
