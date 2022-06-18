/*
	Author       : Theme-Family
	Template Name:	Al-Muqit - Cv/Resume Portfolio Html Template
	Version      : 1.0
*/

(function ($) {
	"use strict";

	/*PRELOADER JS*/
	$(window).on('load', function () {
		$('.atf-status').fadeOut();
		$('.atf-preloader').delay(250).fadeOut('slow');
	});
	/*END PRELOADER JS*/

	// Navbar menu-top

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#menu-top').hasClass('navbar-collaps')) {
			$('#menu-top').addClass('navbar-collaps');
		}
	});

	// Navbar Menu Reduce

	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-collaps');
			$('.navbar-expand-md').removeClass('navbar-expend');
		} else {
			$('.navbar-expand-md').addClass('navbar-expend');
			$('.navbar-expand-md').removeClass('navbar-collaps');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-atf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-atf').fadeOut(1000, "easeInOutExpo");
		}
	});


	//  Star Scrolling nav

	$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked

	$('.page-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#menu-top',
		offset: navHeight
	});


	//**================= Sticky =====================**//

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.navbar-expand-md').addClass('navbar-collaps');
			$('.atf-back-to-top').addClass('open');
		} else {
			$('.atf-header-area').removeClass('navbar-collaps');
			$('.atf-back-to-top').removeClass('open');
		}
	});

	//**===================Scroll UP ===================**//

	if ($('.atf-back-to-top').length) {
		$(".atf-back-to-top").on('click', function () {
			var target = $(this).attr('data-targets');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	//Mouse hover tile effect js//

	$(".card-s").tilt({
		maxTilt: -20,
		perspective: 2400,
		speed: 2200,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		scale: 1,

	});

	//**===================Typed-word ===================**//	

	var typed = new Typed('.typed-word', {
		strings: [" Développeurs .", " Techniciens .", " Designer ."],
		typeSpeed: 40,
		backSpeed: 40,
		backDelay: 2000,
		startDelay: 1500,
		loop: true,
		showCursor: true
	});

	//**===================abh-wab-img ===================**//		
	$("#atf-wab-img").length && $("#atf-wab-img").wavify({
		height: 100,
		bones: 3,
		amplitude: 50,
		color: "#fff",
		speed: .25
	});

	var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500);    
}

	//**===================Odometer JS ===================**//

	$('.odometer').appear(function () {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});


	//**===================Porfolio isotope===================**//	 
	$(window).on('load', function () {

		var portfolioIsotope = $('.atf-main-portfolio').isotope({
			itemSelector: '.atf-grid-portfolio'
		});

		$('#atf-portfolio-flters li').on('click', function () {
			$("#atf-portfolio-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');

			portfolioIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});



	//**===================Magnific Popup ===================**//

	var magnifPopup = function () {
		$('.atf-popup-img').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function (openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	// Call the functions
	magnifPopup();

	/* WOW Scroll Spy
			========================================================*/
	var wow = new WOW({
		//disabled for mobile
		mobile: false
	});

	wow.init();

	//**===================Testimonial Slider ===================**//

	var swiper = new Swiper(".teachers-slider", {
		spaceBetween: 20,
		grabCursor: true,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			540: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});

	/*START HOME WATER JS*/

	if (typeof $.fn.ripples == 'function') {
		try {
			$('#atf-ripple').ripples({
				resolution: 500,
				perturbance: 0.01
			});
		} catch (e) {
			$('.error').show().text(e);
		}
	}

	/*END HOME WATER JS*/



})(jQuery);