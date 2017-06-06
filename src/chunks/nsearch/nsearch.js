(function($)
{
  $('#nsearch__toggle').click(function(event) {

    $('#nsearch').toggleClass('nsearch_open');

    if( $('#nsearch').hasClass('nsearch_open') ) {
      $('#nsearch__input').focus();
    }        
  });

  $(document).click(function(event) {
    if (!$(event.target).is("#nsearch__toggle, #nsearch__input, #nsearch__submit, #nsearch__inner")) {

      $('#nsearch').removeClass('nsearch_open');
    }
  });
})(jQuery);