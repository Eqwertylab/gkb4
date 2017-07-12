(function($)
{
  $('#nsearch__submit').click(function(event)
  {
    event.stopPropagation();

    if(!$('#nsearch').hasClass('nsearch_open'))
    {
      event.preventDefault();
      $('#nsearch').toggleClass('nsearch_open');
      $('#nsearch__input').focus();
    }
  });

  $(document).click(function(event)
  {
    if (!$(event.target).is("#nsearch__input, #nsearch__submit, #nsearch__inner"))
    {
      $('#nsearch').removeClass('nsearch_open');
    }
  });

})(jQuery);
