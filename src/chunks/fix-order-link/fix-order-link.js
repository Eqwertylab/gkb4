(function($){

  var headerBtn = document.querySelector('.header__order'),
      $fixOrderLink = $('.fix-order-link');

  $(window).scroll(toggleOrderLink);

  function toggleOrderLink()
  {
    if(isInViewport(headerBtn))
    {
      $fixOrderLink.removeClass('fix-order-link_active');
    }
    else
    {
      $fixOrderLink.addClass('fix-order-link_active');
    }
  }

  function isInViewport(element)
  {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
})(jQuery);
