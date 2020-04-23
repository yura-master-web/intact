$('.js-slider').owlCarousel({
	nav: true,
	dots: false,
	responsive: {
		1200: {
			items: 6
		}
	},
	navText: [
		[
			'<svg class="slider-arrow slider-arrow_prev arrow-style">',
			'<use xlink:href="/assets/images/icon.svg#icon_arrow"></use>',
			'</svg>'
		].join(''),
		[
			'<svg class="slider-arrow slider-arrow_next arrow-style">',
			'<use xlink:href="/assets/images/icon.svg#icon_arrow"></use>',
			'</svg>'
		].join('')
	]
});
