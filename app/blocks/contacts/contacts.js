$('input[name~="phone"]').mask('9 (999) 999 99 99');

$.extend($.validator.messages, {
	minlength: '',
	required: '',
	email: ''
});

let btnSubmit = null;

const settingsValidation = {
	rules: {
		phone: {
			minlength: 17
		},
		name: {
			minlength: 2
		}
	},
	submitHandler() {
		btnSubmit = $(this.submitButton);
		btnSubmit.attr('disabled', 'disabled');

		$.post('index.php', $(this.currentForm).serialize())
			.done(() => {
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
					btnSubmit.removeAttr('disabled');
				});
			})
			.fail(() => {
				console.warn('fail');

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
					btnSubmit.removeAttr('disabled');
				});
			});
	}
};

$('.js-contact-form').validate(settingsValidation);
$('.js-callback-form').validate(settingsValidation);
