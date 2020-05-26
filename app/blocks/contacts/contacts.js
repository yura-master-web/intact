$('input[name~="phone"]').mask('9 (999) 999 99 99');

$.extend($.validator.messages, {
	minlength: '',
	required: '',
	email: ''
});

let btnSubmit = null;

const showGoodRespose = el => {
	const $modal = $(el);
	const $blockGood = $modal.find('.js-modal-good');
	const $blockFail = $modal.find('.js-modal-fail');
	$blockGood.show();
	$blockFail.hide();

	// открываем модальное окно
	const instModal = $(el).remodal();
	instModal.open();
	btnSubmit.removeAttr('disabled');
};
const showBadResponse = el => {
	const $modal = $(el);
	const $blockGood = $modal.find('.js-modal-good');
	const $blockFail = $modal.find('.js-modal-fail');
	// const $txtError = $modal.find('.js-bad-text');
	// $txtError.html(error);
	$blockGood.hide();
	$blockFail.show();

	// открываем модальное окно
	const instModal = $(el).remodal();
	instModal.open();
	btnSubmit.removeAttr('disabled');
};

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

		$.post('/send.php', $(this.currentForm).serialize())
			.done(res => {
				$('[data-remodal-id="modal"]').each((i, el) => {
					const {status} = JSON.parse(res);
					if (status === 'ok') {
						// покажем положительный результат
						showGoodRespose(el);
					} else {
						showBadResponse(el);
					}
				});
			})
			.fail(() => {
				$('[data-remodal-id="modal"]').each((i, el) => {
					// покажем провал запроса
					showBadResponse(el);
				});
			});
	}
};

$('.js-contact-form').validate(settingsValidation);
$('.js-callback-form').validate(settingsValidation);
