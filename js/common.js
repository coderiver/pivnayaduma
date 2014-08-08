head.ready(function() {

	// order
	var order = $('.js-order'),
			order_trigger = $('.js-order-trigger');
	order_trigger.on('click', function () {
		order_trigger.toggleClass('is-active');
		order.toggle();
		return false;
	});

	$(document).on('click', function () {
		order_trigger.removeClass('is-active');
		order.hide();
	});
	order.find('.order__form, .order__done').on('click', function (event) {
		event.stopPropagation();
	});

	// about slider
	var about_slider = $('.js-about-slider');
	if (about_slider.length) {
		about_slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		});
	};

	// production
	var production_go = $('.js-production-go');
	if (production_go.length) {
		var	production_scheme = $('.js-production-scheme'),
				production_scheme_top = production_scheme.offset().top,
				section = $('.section');
		production_go.on('click', function () {
			section.animate({scrollTop: production_scheme_top}, 500);
		});
	};
	
	// google maps
	function initialize() {
		// Create an array of styles.
		var styles = [
		  {
		    "stylers": [
		      { "saturation": -100 },
		      { "hue": "#66ff00" },
		      { "gamma": 0.88 },
		      { "visibility": "on" }
		    ]
		  }
		];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

	  var myLatlng = new google.maps.LatLng(50.4501,30.5234);

	  var mapOptions = {
	    zoom: 12,
	    center: myLatlng,
	    disableDefaultUI: true,
	    scrollwheel: false,
	    zoomControl: true,
	    zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.DEFAULT,
	      position: google.maps.ControlPosition.RIGHT_TOP
	    }
	  }

	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	  var marker_pos_1 = new google.maps.LatLng(50.465414, 30.516252);
	  var marker_pos_2 = new google.maps.LatLng(50.401246, 30.637553);
	  var marker_pos_3 = new google.maps.LatLng(50.517770, 30.597929);
	  var marker_pos_4 = new google.maps.LatLng(50.448401, 30.493445);
	  var marker_pos_5 = new google.maps.LatLng(50.451934, 30.525839);
	  var image = 'img/marker.png';
	  var marker_1 = new google.maps.Marker({
	      position: marker_pos_1,
	      map: map,
	      icon: image
	  });
	  var marker_2 = new google.maps.Marker({
	      position: marker_pos_2,
	      map: map,
	      icon: image
	  });
	  var marker_3 = new google.maps.Marker({
	      position: marker_pos_3,
	      map: map,
	      icon: image
	  });
	  var marker_4 = new google.maps.Marker({
	      position: marker_pos_4,
	      map: map,
	      icon: image
	  });
	  var marker_5 = new google.maps.Marker({
	      position: marker_pos_5,
	      map: map,
	      icon: image
	  });

	  //Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');
	}
	google.maps.event.addDomListener(window, 'load', initialize);		

});