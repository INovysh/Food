$(document).ready(function () {
  $(".instagram__wrapper").slick({
    speed: 1200,
    dots: false,
    prevArrow:
      '<button style="background: transparent" type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button style="background: transparent" type="button" class="slick-next"><img src="icons/right.svg"></button>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 577,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          
        },
      },
    ],
  });
});
/* prevArrow:
      '<button style="background: transparent" type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button style="background: transparent" type="button" class="slick-next"><img src="icons/right.svg"></button>',
    dots: true,
    infinite: false,
    speed: 300,
  
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
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
    ],
  }); */
