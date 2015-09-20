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
      App.Fn.map();  
    });
  },


  Fn: {

    map: function() {

      var myMap, 
          myPlacemark;

      ymaps.ready(init);

      if( '#map' ) {

        setMap();
      }

      function setMap() {

        var coor = $('.contab__link_active').data('map');
        
      }

      $('.contab__link').click(function(event) {
      
        event.preventDefault();

        if( !$(this.hasClass('contab__link_active')) ) {
          var coor = $(this).data('map');
        }

        var coor = $(this).data('map');

        myMap.destroy();

        alert(coor);
      });

      function init(x,y) { 
          myMap = new ymaps.Map("map", {
              center: [x, y],
              zoom: 7
          }); 
          
          myPlacemark = new ymaps.Placemark([x, y], {
              hintContent: 'Москва!',
              balloonContent: 'Столица России'
          });
          
          myMap.geoObjects.add(myPlacemark);
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

    	$('.mmenu__item_container > .mmenu__link')
        .click(function(event) {
          
          event.preventDefault();
          var parent_elem = $(this).parent();
          parent_elem.toggleClass('mmenu__item_open');
        });

      $('.menu__item_container > .menu__link')
	    	.click(function(event) {
	    		event.preventDefault();
	    	});
      
    }
  }
}

App.In(jQuery);