$(function() {
    $('.main-header__menu-close').on('click', function() {
        $('.main-header__menu-wrapper').removeClass('active');
    })
    
    $('.main-header__ham').on('click', function() {
        $('.main-header__menu-wrapper').addClass('active');
    });
});