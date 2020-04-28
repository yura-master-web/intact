let width;
$('.js-btn-mobile-menu').on('click', () => {
    // console.log('click');
    if (!$('body').hasClass('is-menu-open')) {
        setTimeout(() => {
            $('body').addClass('is-menu-open is-noscroll');
            width = $(window).width();
        }, 0);
    } else {
        $('body').removeClass('is-menu-open is-noscroll');
    }
});
$(document).on('click', e => {
    if ($('body').hasClass('is-menu-open is-noscroll')) {
        if (
            $(e.target).closest('.js-wrap-menu-mobile').length ||
            $(e.target).closest('.js-btn-mobile-menu').length ||
            $(e.target).closest('.remodal-is-opened').length
        ) {
            return true;
        }
        $('body').removeClass('is-menu-open is-noscroll');
    }
});

$(window).on('resize', () => {
    if (width !== $(window).width() && $('body').hasClass('is-menu-open')) {
        $('body').removeClass('is-menu-open is-noscroll');
    }
});

$('.js-mob-menu-item').on('click', () =>
    $('.js-btn-mobile-menu').trigger('click')
);
