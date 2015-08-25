App = {};

App = {

	In: function($) {

    $(function() {

    	// Сайдбар
      App.Fn.sidebar_mob(); 

      // Меню
      App.Fn.menu();  
    });
  },


  Fn: {

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
    }
  }
}

App.In(jQuery);