(function($) {
  //
  // Functions
  //

  window.contab = function() { 

    if( !$('#map').length ) return;

    var map = setMap();

    $('.contab__link').click(function(event) {

      event.preventDefault();

      if( $(this).hasClass('contab__link_active') )
        return;

      $('.contab__item_active').removeClass('contab__item_active');
      $href = $(this).attr('href');
      $($href).addClass('contab__item_active');


      $('.contab__link_active').removeClass('contab__link_active');
      $(this).addClass('contab__link_active');
      map.destroy();
      map = setMap();
    });
  }

  function setMap() {
    var myMap, 
        myPlacemark;

    var coor = $('.contab__link_active').data('map');
    var coor_arr = coor.split(',');

    var x = coor_arr[0];
    var y = coor_arr[1];

    myMap = new ymaps.Map("map", 
      {
        center: [x, y],
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"],
      }
    ); 
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([x, y], {
        hintContent: $('.contab__link_active').text(),
        balloonContent: $('.contab__link_active').text()
    });

    myMap.geoObjects.add(myPlacemark);

    return myMap;
  }

})(jQuery);
