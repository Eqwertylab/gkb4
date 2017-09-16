(function(){
  var menu = document.querySelector('.paid-menu');
  menu && menu.addEventListener('click', toggleMenu);

  function toggleMenu(e)
  {
    var that = e.target;
    if(!that.matches('.paid-menu__fold')) return;

    var parent = that.parentNode;
    if(parent.classList.toggle('active'))
    {
      that.classList.remove('icon-down-open');
      that.classList.add('icon-up-open');
    }
    else
    {
      that.classList.remove('icon-up-open');
      that.classList.add('icon-down-open');
    }
  }
})();
