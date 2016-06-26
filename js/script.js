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
    
    $('.main-header__search').on('click', function(e) {
        
        if ($(e.target).is('.main-header__search-text')) {
            return false;
        }
        
        if ($('.main-header__search-text').hasClass('active')) {
            $('.main-header__search-text').removeClass('active');
        } else {
            $('.main-header__search-text').addClass('active');
        }
    });

    $('.conclusion_list').on('click', function(e) {

        if ($(e.target).is('a')) {
            return true;
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).css({
                'height' : 50
            });
        } else {
            $(this).addClass('active');
            var $childrens = $(this).find('a');
            var height = 0;
            for (var i = 0; i < $childrens.length; i++) {
                height += $childrens.eq(i).outerHeight(true);
            }
            height = height + 50;
            $(this).css({
                'height' : height
            });
        }
    });

    $('.conclusion-popup__header-btn').on('click', function() {
        $('.conclusion-popup').removeClass('active');
        $('.conclusion-popup__wrapper').removeClass('active');
    });

    CKEDITOR.replace( 'editor1' );
    
});