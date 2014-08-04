head.ready(function() {

	// order
	var order = $('.js-order'),
			order_trigger = $('.js-order-trigger');
	order_trigger.on('click', function () {
		order_trigger.addClass('is-active');
		order.show();
		return false;
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

});