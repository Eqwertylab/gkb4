(function($){

//
// Handlers
//

$('.specview-panel-toggle__item').on('click', toggleSpecview);
$('.specview-panel-size__item').on('click', toggleSize);
$('.specview-panel-color__item').on('click', toggleColor);

//
// Function
//

function toggleSpecview(e)
{
  e.preventDefault();
  var config = {'size' : 'sm', 'color' : 'bw'};

  if($('html').hasClass('specview'))
  {
    resetSize();
    resetColor();
  }
  else
  {
    setSize(config.size);
    setColor(config.color);
  }

  $('html').toggleClass('specview');
}

/* Size */

function toggleSize(e)
{
  e.preventDefault();
  setSize($(this).data('size'));
}

function setSize(current)
{
  resetSize();
  $('html').addClass('specview_size_' + current);
  $('.specview-panel-size__item_' + current).addClass('specview-panel-size__item_active');
  Cookies.set('specviewSize', current, {expires: 365});
}

function resetSize()
{
  var sizes = ['sm', 'md', 'lg'];

  sizes.forEach(function(item)
  {
    $('html').removeClass('specview_size_' + item);
  });

  $('.specview-panel-size__item').removeClass('specview-panel-size__item_active');
}

/* Color */

function toggleColor(e)
{
  e.preventDefault();
  setColor($(this).data('color'));
}

function setColor(current)
{
  resetColor();
  $('html').addClass('specview_color_' + current);
  $('.specview-panel-color__item_' + current).addClass('specview-panel-color__item_active');
  Cookies.set('specviewColor', current, {expires: 365});
}

function resetColor()
{
  var colors = ['bw', 'wb', 'b'];

  colors.forEach(function(item)
  {
    $('html').removeClass('specview_color_' + item);
  });

  $('.specview-panel-color__item').removeClass('specview-panel-color__item_active');
}

})(jQuery);
