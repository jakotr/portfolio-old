$('.header__menu-ham').on('click', function() {
    $('i').toggleClass('show');
    $('.header__list__ham').toggleClass('come');
});

$('a').on('click', function(event) {
    if($(event.target).data('scroll')) {
        $('body, html').animate({
            scrollTop: $(`.${$(event.target).data('scroll')}`).offset().top - 100
        }, 1000);
        if(window.innerWidth < 550) {
            $('.header__list__ham').toggleClass('come');
            $('i').toggleClass('show');
        }
    }
});

