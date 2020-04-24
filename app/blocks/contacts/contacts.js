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
				console.log('send');
			})
			.fail(() => {
				console.log('fail');
			});
	}
});

// const formData = new FormData();
// const fields = $('.js-contact-form').find('.js-contact-form-field');
// fields.each((i, el) =>
// 	formData.append($(el).attr('name'), $(el).val())
// );

/*
function send(e) {
	e.preventDefault();
	$(e.currentTarget).trigger('disabled');

	$('.modal-sign-in .error-block').html('');

	const formData = new FormData();

	formData.append('send_authorisation_form', true);
	formData.append('login', $('.js-auth-login').val());
	formData.append('password', $('.js-auth-password').val());
	formData.append(
		'remember',
		$('.js-public-login-remember').is(':checked') ? 'Y' : 'N'
	);
	formData.append('redirect', $('input[name=auth-redirect]').val());

	// axios
	//     .post('/public-ajax/auth/', formData)
	//     .then(function(response) {
	//         if (response.data.success) {
	//             if (typeof response.data.redirect !== 'undefined') {
	//                 window.location.href = response.data.redirect;
	//             }
	//         } else if (response.data.error) {
	//             if (response.data.messages) {
	//                 $('.modal-sign-in .error-block').html(response.data.messages);
	//                 $(e.currentTarget).trigger('enabled', send);
	//             }
	//         }
	//     })
	//     .catch(function(error) {
	//         console.warn(error);
	//     });
}

$('.jd-btn-form-submit').on('click', send);
*/
