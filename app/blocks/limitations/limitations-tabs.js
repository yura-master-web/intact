$('.js-limitations-tabs').each((i, el) => {
	const $block = $(el);
	const $headItems = $block.find('.js-limitations-tabs-header-imte');
	const $contItems = $block.find('.js-limitations-tabs-cont-item');

	$contItems.hide(0);

	$headItems.on('click', e => {
		const target = $(e.currentTarget);
		const id = target.data('head-id');
		if (!target.hasClass('is-active')) {
			$headItems.removeClass('is-active');
			target.addClass('is-active');
			$contItems.hide(0);
			$contItems
				.filter((ind, elem) => id === $(elem).data('cont-id'))
				.fadeIn(300);
		}
	});

	$contItems
		.eq(
			$headItems
				.filter((ind, elem) => $(elem).hasClass('is-active'))
				.data('head-id')
		)
		.show(0);
});
