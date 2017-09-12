(function() {
  var selector = '.sidebar';
  var sidebar = document.querySelector(selector);

  if(window.document.body.clientWidth >= 768 && sidebar)
  {
    var sidebar = new StickySidebar(selector, {
      containerSelector: '.main__container',
      innerWrapperSelector: '.sidebar__box',
      topSpacing: 0,
      bottomSpacing: 0
    });
  }

})();

