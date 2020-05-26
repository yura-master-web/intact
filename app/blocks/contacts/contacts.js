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
	$blockGood.hide();
	$blockFail.show();

	// открываем модальное окно
	const instModal = $(el).remodal();
	instModal.open();
	btnSubmit.removeAttr('disabled');
};

let idn = null;

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

		if (!idn) {
			$.post('send.php', $(this.currentForm).serialize())
				.done(res => {
					console.log(res);
					$('[data-remodal-id="modal"]').each((i, el) => {
						const {status, message, id} = JSON.parse(
							res.statusText
						);
						if (status === 'ok') {
							console.log(message);
							idn = id;
							// покажем положительный результат
							showGoodRespose(el);
						} else {
							showBadResponse(el);
						}
					});
				})
				.fail(res => {
					console.warn('fail');
					console.log(res);

					$('[data-remodal-id="modal"]').each((i, el) => {
						// покажем провал запроса
						showBadResponse(el);
					});
				});
		}
	}
};

$('.js-contact-form').validate(settingsValidation);
$('.js-callback-form').validate(settingsValidation);
