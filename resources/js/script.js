$(document).ready(function () {

    /* STICKY NAVIGATION */

    $('.section-description').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* SCROLL BTNS*/

    $('.js--scroll-to-signup').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-form').offset().top
        }, 1000)
    });

    $('.js--scroll-to-desc').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-description').offset().top
        }, 1000)
    });

    /* ANIMATION ON SCROLL */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '100%'
    });


    /*Mobile navigation*/

    $('.mobile-nav-ico').click(function () {
        const nav = $('.main-nav');
        const icon = $('.mobile-nav-ico')
        nav.slideToggle(200);
    })

    /* Zoom gallery */
    
    $('.without-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

$('.with-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		zoom: {
			enabled: true
		}
	});

});
