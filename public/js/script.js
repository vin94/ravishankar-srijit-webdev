// Agency Theme JavaScript

(function($) {
    "use strict";

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNavigation').affix({
        offset: {
            top: 100
        }
    });

    // Animation for personal description
    $('.selector').animatedHeadline({
        animationType: 'type'
    });

    new WOW().init();

})(jQuery);
