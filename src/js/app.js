App = {};

App = {

	In: function($) {

    $(function() {

    	// Сайдбар
      App.Fn.sidebar_mob(); 

      // Меню
      App.Fn.menu();

      // Поиск
      App.Fn.searchbox(); 

      // Слайдеры
      App.Fn.slider();  

      // Всплывающие окна
      App.Fn.upwindow();  

      // Календарь
      App.Fn.calendar();  

      // Карта
      // Инициализируется map-api

      //Метрика
      App.Fn.metrik(document, window, "yandex_metrika_callbacks");  
    });
  },


  Fn: {

    metrik: function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter32808455 = new Ya.Metrika({
                    id:32808455,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    },

    map: function() {

      if( !$('#map').length ) return;

      init();
      
      function init() { 

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
    },

    calendar: function() {
      $( "#datepicker" ).datepicker({
        minDate: new Date(),
        altField: "#date",
      });
    },

    upwindow: function() {
      
      $(".fancybox").fancybox({
        closeBtn    : false,
        helpers   : {
          title : { type : 'inside' },
          buttons : {}
        }
      });
    },

    slider: function(){

      var mySwiper = new Swiper ('.swiper-container', {
       
        // If we need pagination
        pagination: '.swiper-pagination',
        
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        autoplay: 5000,

        effect: "fade",

        paginationClickable: true
      })        
    },

    searchbox:function() {

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
    },


  	sidebar_mob: function() {

      $('#mlayout__toggle, #mlayout__curtain').click(function() {

        $('html').toggleClass('open');
      });

      $('.mmenu__link').click(function() {

        if( !$(this).parent().hasClass('mmenu__item_container') ) {
        	$('html').toggleClass('open');
        }
      });
    },

    menu: function() {

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
      
    }
  }
}

App.In(jQuery);

AOS.init();