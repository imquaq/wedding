; (function () {

	'use strict';

	var mobileMenuOutsideClick = function () {

		// $(document).click(function (e) {
		// var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
		// if (!container.is(e.target) && container.has(e.target).length === 0) {

		// 	if ( $('body').hasClass('offcanvas') ) {

		// 		$('body').removeClass('offcanvas');
		// 		$('.js-fh5co-nav-toggle').removeClass('active');
		// 	}
		// }
		// });

	};


	var offcanvasMenu = function () {

		// $('#page').prepend('<div id="fh5co-offcanvas" />');
		// $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		// var clone1 = $('.menu-1 > ul').clone();
		// $('#fh5co-offcanvas').append(clone1);
		// var clone2 = $('.menu-2 > ul').clone();
		// $('#fh5co-offcanvas').append(clone2);

		// $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		// $('#fh5co-offcanvas')
		// 	.find('li')
		// 	.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				// $('.js-fh5co-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		// $('body').on('click', '.js-fh5co-nav-toggle', function(event){
		// 	var $this = $(this);


		// 	if ( $('body').hasClass('overflow offcanvas') ) {
		// 		$('body').removeClass('overflow offcanvas');
		// 	} else {
		// 		$('body').addClass('overflow offcanvas');
		// 	}
		// 	$this.toggleClass('active');
		// 	event.preventDefault();

		// });
	};



	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function () {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#fh5co-counter').length > 0) {
			$('#fh5co-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};

	var autoplay = function () {
		const muteBtn = document.getElementById('muteBtn');
		const audio = document.getElementById('bg-audio');

		muteBtn.addEventListener('click', () => {
			audio.muted = !audio.muted;

			if (audio.paused) {
				audio.play();
			}
			muteBtn.innerHTML = (audio.muted || audio.paused) ? `<i class="fa-duotone fa-solid fa-volume-xmark"></i>` : `<i class="fa-solid fa-volume-high"></i>`;
		});

		// setTimeout(() => {
			if (audio.paused) {
				muteBtn.click();
			}
			muteBtn.style.display = 'block';
		// }, 3000);
	}

	var calendar = function () {
		var listEl = document.getElementsByClassName("calendar");
		if (listEl) {
			var day = 18;
			var month = 6;
			var year = 2025;

			var listDayName = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

			var fromDate = new Date(year, month, 1);
			var toDate = new Date(
				new Date(fromDate).setMonth(fromDate.getMonth() + 1)
			);
			toDate = new Date(toDate.setDate(toDate.getDate() - 1));

			let _index = fromDate.getDay();
			if (_index > 0) {
				fromDate = new Date(fromDate.setDate(fromDate.getDate() - _index));
			}
			_index = toDate.getDay();
			if (_index < 6) {
				toDate = new Date(toDate.setDate(toDate.getDate() + (6 - _index)));
			}

			let html = "";
			html += `<div class="calendar-img1">
					<img src="images/bg/shape7.svg">
				</div>
				
				<div class="calendar-img2">
					<img src="images/bg/shape8.svg">
				</div>`;
			html += `<div class='month-name'><h2>Tháng 7/2025</h2>
			<div class="calendar-img3">
					<img src="images/bg/shape2.svg">
				</div>
			</div>`;
			html += `<div class="days">`;
			listDayName.forEach((element) => {
				html += `<div class="day-names">${element}</div>`;
			});
			for (
				var date = new Date(fromDate);
				date <= toDate;
				date = new Date(date.setDate(date.getDate() + 1))
			) {
				html += `<div class="${date.getMonth() == month ? "day-of-month" : "day-outof-month"}
				${date.getDate() == day ? "selected" : ""}">
				${date.getDate() == day
						? '<i class="fa-solid fa-heart heart-day"></i>'
						: ""
					}
            ${date.getDate()}
            </div>`;
			}
			html += `</div>`;

			for (var el of listEl) {
				el.innerHTML = html;
			}
		}
	}

	var envelop = function () {

		var ANIMATION_TIME = 2000;
		var envelope = $("#box-envelope");
		var heart = $("#heart-envelop");
		var card = $('#main-content');

		heart.click(function () {
			if (!envelope.hasClass('flip')) {
				envelope.addClass('flip');
				envelope.fadeOut(ANIMATION_TIME);
				window.setTimeout(function () {
					envelope.css('display', 'none');
					card.css('display', 'block');
					autoplay();
				}, ANIMATION_TIME);
			}
		});

	}

	$(function () {
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		// autoplay();
		calendar();
		envelop();
	});


}());