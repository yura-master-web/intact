$('a[href^="#"]').on('click', e => {
    const href = $(e.currentTarget).attr('href');

    $('html, body')
        .stop()
        .animate(
            {
                scrollTop: $(href).offset().top
            },
            1000
        );
    e.preventDefault();
    return false;
});

$('.js-main-block-arrow').on('click', e => {
    $('html, body')
        .stop()
        .animate(
            {
                scrollTop: $('#problems').offset().top
            },
            1000
        );
    e.preventDefault();
    return false;
});
