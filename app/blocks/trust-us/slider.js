$('.js-slider').owlCarousel({
	nav: true,
	dots: false,
	items: 2,
	responsive: {
		1200: {
			items: 6,
		},
		992: {
			items: 5,
		},
		768: {
			items: 4,
		},
		576: {
			items: 3,
		},
	},
	navText: [
		[
			'<svg class="slider-arrow slider-arrow_prev arrow-style">',
			'<use xlink:href="assets/images/icon.svg#icon_arrow"></use>',
			'</svg>',
		].join(''),
		[
			'<svg class="slider-arrow slider-arrow_next arrow-style">',
			'<use xlink:href="assets/images/icon.svg#icon_arrow"></use>',
			'</svg>',
		].join(''),
	],
});
