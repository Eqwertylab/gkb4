(function($){

  $('.slider__view').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider__nav-slides'
  });

  $('.slider__nav-slides').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider__view',
    centerMode: true,
    focusOnSelect: true,
    responsive:
    [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

})(jQuery);
