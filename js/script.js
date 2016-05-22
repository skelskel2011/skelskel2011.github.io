$(function() {
    $('.main-header__menu-close').on('click', function() {
        $('.main-header__menu-wrapper').removeClass('active');
    });
    
    $('.main-header__ham').on('click', function() {
        $('.main-header__menu-wrapper').addClass('active');
    });
    
    $('.main-content-item-menu__item').on('click', function(e) {
        var index = $(this).index();
        
        $('.main-content-item-menu__item').removeClass('active');
        $('.main-content-item-menu__item').eq(index).addClass('active');
        $('.main-content-item__content').removeClass('active');
        $('.main-content-item__content').eq(index).addClass('active');
    });
});