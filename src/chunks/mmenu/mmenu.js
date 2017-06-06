(function($)
{
  $('#mlayout__toggle, #mlayout__curtain').click(function() {

    $('html').toggleClass('open');
  });

  $('.mmenu__link').click(function() {

    if( !$(this).parent().hasClass('mmenu__item_container') ) {
      $('html').toggleClass('open');
    }
  });
})(jQuery);