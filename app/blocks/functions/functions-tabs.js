$('.js-finctions-tabs').each((i, el) => {
	const $block = $(el);
	const $tabItem = $block.find('.js-finctions-tabs-item');
	const $contItem = $block.find('.js-functions-content-item');
	$contItem.eq(0).show();

	$tabItem.on('click', e => {
		const target = $(e.currentTarget);
		const id = target.data('tab-id');
		if (!target.hasClass('is-active')) {
			$tabItem.removeClass('is-active');
			target.addClass('is-active');
			$contItem.fadeOut(200);
			// $contItem.hide(300);
			// prettier-ignore
			$contItem.filter((ind, elem) => id === $(elem).data('con-id')).delay(200).fadeIn(200);
		}
	});
});
