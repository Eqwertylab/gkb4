(function($) 
{
  $( ".menu__inner" ).parent().addClass('menu__item_container');
  $( ".mmenu__inner" ).parent().addClass('mmenu__item_container');

  $('.mmenu')
    .on('click', '.mmenu__item_container > .mmenu__link', function(event) {

      event.preventDefault();
      var parent_elem = $(this).parent();
      parent_elem.toggleClass('mmenu__item_open');
    });

  $('menu')
    .on('click', '.menu__item_container > .menu__link', function(event) {
      event.preventDefault();
    });

})(jQuery);