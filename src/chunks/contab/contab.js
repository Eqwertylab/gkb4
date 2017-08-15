(function($) {

  if(!$('#map').length) return;

  window.contab = init;
  var map;

  /*
  * Handlers
  */

  $('.contab__link, .menu__link, .mmenu__link').click(changeTab);

  /*
  * Functions
  */

  function init()
  {
    var tab = 'tab-one',
        hash = getHash();

    if(hash.tab && $('#' + hash.tab).length)
    {
      tab = hash.tab;
    }

    setTab(tab);
  }

  function changeTab(event)
  {
    event.preventDefault();
    event.stopPropagation();

    var beginSlice = $(this).attr('href').indexOf('#');
    var hash = getHash($(this).attr('href').slice(beginSlice));
    var tab = hash.tab;

    setTab(tab);
    setHash('tab', tab);
  }

  function setTab(tab)
  {
    var $link = $('.contab__link[href="#tab=' + tab + '"]'),
        $content = $('#' + tab);

    if($link.hasClass('contab__link_active')) return;

    $('.contab__item_active').removeClass('contab__item_active');
    $('.contab__link_active').removeClass('contab__link_active');

    $content.addClass('contab__item_active');
    $link.addClass('contab__link_active');

    changeMap($link.data('map'));
  }

  function changeMap(coor)
  {
    if(typeof map == 'object') map.destroy();
    map = setMap(coor);
  }

  function setMap(coor)
  {
    var map,
        placemark,
        coor = coor.split(','),
        x = coor[0],
        y = coor[1];

    map = new ymaps.Map("map",
    {
      center: [x, y],
      zoom: 16,
      controls: ["zoomControl", "fullscreenControl"],
    });

    map.behaviors.disable('scrollZoom');

    placemark = new ymaps.Placemark([x, y],
    {
      hintContent: $('.contab__link_active').text(),
      balloonContent: $('.contab__link_active').text()
    });

    map.geoObjects.add(placemark);
    return map;
  }

  function getHash(from)
  {
    var hash = {},
        params = from ? from.substring(1).split('&') : location.hash ? location.hash.substring(1).split('&') : [];

    params.forEach(function(el)
    {
      var item = el.split('=');
      hash[item[0]] = item[1];
    });

    return hash;
  }

  function setHash(key, val)
  {
    var list = [],
        hash = getHash();

    hash[key] = val;

    for(key in hash)
    {
      if(typeof hash[key] == 'undefined')
      {
        list.push(key);
      }
      else
      {
        list.push(key + '=' + hash[key]);
      }
    }

    location.hash = "#" + list.join('&');
  }

})(jQuery);
