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
	var production_go = $('.js-production-go'),
			production_scheme = $('.js-production-scheme'),
			production_scheme_top = production_scheme.offset().top,
			section = $('.section');
	production_go.on('click', function () {
		section.animate({scrollTop: production_scheme_top}, 500);
	});

});