$('input[name~="phone"]').mask('9 (999) 999 99 99');

$.extend($.validator.messages, {
	minlength: '',
	required: '',
	email: ''
});

$('.js-contact-form').validate({
	rules: {
		phone: {
			minlength: 17
		},
		name: {
			minlength: 2
		}
	},
	submitHandler() {
		console.log('submit');

		$.post('index.php', $('.js-contact-form').serialize())
			.done(() => {
				console.log('success');

				$('[data-remodal-id="modal"]').each((i, el) => {
					// покажем положительный результат
					const $modal = $(el);
					const $blockGood = $modal.find('.js-modal-good');
					const $blockFail = $modal.find('.js-modal-fail');
					$blockGood.show();
					$blockFail.hide();

					// открываем модальное окно
					const instModal = $(el).remodal();
					instModal.open();
				});
			})
			.fail(() => {
				console.log('fail');

				$('[data-remodal-id="modal"]').each((i, el) => {
					// покажем провал запроса
					const $modal = $(el);
					const $blockGood = $modal.find('.js-modal-good');
					const $blockFail = $modal.find('.js-modal-fail');
					$blockGood.hide();
					$blockFail.show();

					// открываем модальное окно
					const instModal = $(el).remodal();
					instModal.open();
				});
			});
	}
});
