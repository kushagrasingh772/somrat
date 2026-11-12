(function ($) {
	'use strict';

	/*--------------------------------
	 Start Preloader Animation
	----------------------------------*/
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	/*--------------------------------
			End Preloader Animation
		----------------------------------*/

	// -----------------------------
	//  Count Up
	// -----------------------------
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	// -----------------------------
	//  On Scroll
	// -----------------------------
	$(window).on('scroll', function () {
		counter();
	});



	/*--------------------------------
	 Start Smooth Scrolling
	----------------------------------*/
	function smoothScroll() {
		// Select all links with hashes
		$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.on("click", function (event) {
				// On-page links
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
					location.hostname == this.hostname
				) {
					// Figure out element to scroll to
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					// Does a scroll target exist?
					if (target.length) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, "easeInOutExpo", function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) { // Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						});
					}
				}
			});
		jQuery.extend(jQuery.easing, {
			easeInOutExpo: function (x, t, b, c, d) {
				if (t == 0) return b;
				if (t == d) return b + c;
				if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			}
		});
	}
	// Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
	if (navigator.userAgent.indexOf('Opera Mini') == -1 || navigator.userAgent.indexOf('UCBrowser') != -1) {
		smoothScroll();
	}
	/*--------------------------------
			End Smooth Scrolling
	----------------------------------*/

	/*--------------------------------
	 Start Header
		----------------------------------*/
	// Initiating Background Slider
	var backgroundSlide = $('#background-slide');
	backgroundSlide.owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut'
	});
	$('.slider-prev-button').on("click", function () {
		backgroundSlide.trigger('prev.owl.carousel');
	});
	$('.slider-next-button').on("click", function () {
		backgroundSlide.trigger('next.owl.carousel');
	});
	// Setting Up Background Images
	function SliderBackground() {
		if ($(".owl-full-width .slider").length) {
			$(".owl-full-width .slider").each(function () {
				var $this = $(this);
				var img = $this.children(img);
				var imgSrc = img.attr("src");
				$this.css({
					backgroundImage: "url(" + imgSrc + ")",
					backgroundSize: "cover",
					backgroundPosition: "center center"
				});
			});
		}
	}
	// Initializing Background Setting Function
	SliderBackground();
	// Toggle Fullscreen Navigation
	$('#burger').on("click", function () {
		$(".fullscreen-nav-container").slideToggle(300);
	});
	$(".fullscreen-nav-holder a, .turn-home").on("click", function () {
		$("#burger").trigger("click");
	});
	/*--------------------------------
		 End Header
	----------------------------------*/

	/*--------------------------------
	Start Menu
		----------------------------------*/
	// Highlighting Menu on Scroll Through Sections
	$(window).on('scroll', function () {
		$('section').each(function () {
			if ($(window).scrollTop() + 50 >= $(this).offset().top) {
				var id = $(this).attr('id');
				$('.menu-item').removeClass('active');
				$(".menu-item." + id).addClass("active");
				$(".mobile-menu-item").removeClass("active");
				$(".mobile-menu-item." + id).addClass("active");
			}
		});
	});

	// Styling Menu on Scroll
	$('.about-me').waypoint({
		handler: function (direction) {
			// Fixing Menu after leaving Header Section
			$(".menu").toggleClass("menu-fix");
			// Changing Menu background after leaving Header Section
			$(".menu-container").toggleClass("menu-normal");
			$(".menu-item").toggleClass("menu-item-transparent");
			$(".desktop-menu .hvr-underline-from-left").toggleClass("dark");
			// Toggling Mobile Menu Visibility
			$(".mobile-menu").toggleClass("mobile-menu-fix");
			// Auto-Collapsing Mobile Menu When Left Open
			var a = $(".menu-link").attr("class");
			if (direction == "up" && a == "menu-link active") {
				$(".menu-link").trigger("click");
			}
		}
	});

	// Toggle Mobile Menu
	$('.mobile-menu a').on("click", function () {
		$(".menu-link").toggleClass("active");
		$(".menu-slider").slideToggle(500);
	});
	/*--------------------------------
			 End Menu
		----------------------------------*/

	/*--------------------------------
			Start About Me
	----------------------------------*/
	// Initializing Skillbar Animation
	$('.skill h3').waypoint({
		handler: function (direction) {
			if (direction == "up") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').css("width", "0");
				});
			} else if (direction == "down") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2000);
				});
			}
		},
		offset: 'bottom-in-view'
	});
	/*--------------------------------
			End About Me
	----------------------------------*/

	/*--------------------------------
			 Start Portfolio
	----------------------------------*/
	// Shuffle js filter 
	var containerEl = document.querySelector('.filtr-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.filtr-wrapper'), {
			itemSelector: '.filtr-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	// Initialize MagnificPopup Plugin
	$('.filtr-wrapper').magnificPopup({
		type: 'image',
		delegate: '.image-pop',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out'
		}
	});
	/*--------------------------------
			 End Portfolio
	----------------------------------*/

	/*--------------------------------
			 Start Testimonials
	----------------------------------*/
	// Configure and Initialize Owl Carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000
	});
	/*--------------------------------
			End Testimonials
	----------------------------------*/

	/*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
	// Code for Opera Mini
	var vh = $(window).height();
	if (navigator.userAgent.indexOf('Opera Mini') != -1) {
		// Setting Fun Facts Value Immediately 
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
		// Removing Bootstrap Class and Re-Style Input
		$("input").removeClass("form-control");
		$("input").css({
			"width": "100%",
			"height": "50px",
			"background": "#fff"
		});
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
	}

	// Code For UC Browser
	if (navigator.userAgent.indexOf('UCBrowser') != -1) {
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
		$(".fun-facts").css({
			"display": "table",
			"margin": "auto"
		});
		// Setting Fun Facts Value Immediately 
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
	}
	/*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

	/*--------------------------------
			Others
	----------------------------------*/
	// Code for Internet Explorer
	if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		$(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment", "scroll");
		$(".fullscreen-nav-holder").css("width", "100vw");
	}

	// Wow Plugin Initialization
	var wow = new WOW({
		animateClass: 'animated',
		offset: 70,
		mobile: false
	});
	wow.init();

	// Toggling Visibility of Scroll Up Button
	$(".about-me-images").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	$(".sub-button").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	/*--------------------------------
			Others
	----------------------------------*/
}(jQuery));

/*--------------------------------
	Hero: live network canvas (nodes, links and travelling signals)
----------------------------------*/
(function () {
	'use strict';
	var canvas = document.getElementById('hero-canvas');
	if (!canvas || !canvas.getContext) { return; }
	var ctx = canvas.getContext('2d');
	var host = canvas.parentNode;
	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var W = 0, H = 0, dpr = 1, nodes = [], pulses = [], mouse = null, running = false, visible = true, last = 0;
	var LINK = 150, GREEN = '98,216,78', TEAL = '45,212,191';

	function build() {
		dpr = Math.min(window.devicePixelRatio || 1, 2);
		W = host.clientWidth; H = host.clientHeight;
		canvas.width = W * dpr; canvas.height = H * dpr;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		var count = Math.max(28, Math.min(110, Math.round(W * H / 15000)));
		nodes = [];
		for (var i = 0; i < count; i++) {
			nodes.push({
				x: Math.random() * W, y: Math.random() * H,
				vx: (Math.random() - .5) * .32, vy: (Math.random() - .5) * .32,
				r: 1.2 + Math.random() * 1.8, hub: Math.random() < .12, ph: Math.random() * 6.28
			});
		}
		pulses = [];
	}

	function step(t) {
		var dt = Math.min(40, t - last || 16) / 16; last = t;
		ctx.clearRect(0, 0, W, H);
		var i, j, a, b, dx, dy, d, al;
		for (i = 0; i < nodes.length; i++) {
			a = nodes[i];
			a.x += a.vx * dt; a.y += a.vy * dt;
			if (a.x < -20) { a.x = W + 20; } else if (a.x > W + 20) { a.x = -20; }
			if (a.y < -20) { a.y = H + 20; } else if (a.y > H + 20) { a.y = -20; }
		}
		ctx.lineWidth = 1;
		for (i = 0; i < nodes.length; i++) {
			a = nodes[i];
			for (j = i + 1; j < nodes.length; j++) {
				b = nodes[j]; dx = a.x - b.x; dy = a.y - b.y;
				if (dx > LINK || dx < -LINK || dy > LINK || dy < -LINK) { continue; }
				d = Math.sqrt(dx * dx + dy * dy);
				if (d > LINK) { continue; }
				al = (1 - d / LINK) * .34;
				ctx.strokeStyle = 'rgba(' + (a.hub || b.hub ? GREEN : TEAL) + ',' + al + ')';
				ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
				if (pulses.length < 26 && Math.random() < .0009 * dt) { pulses.push({ a: a, b: b, p: 0, s: .008 + Math.random() * .012 }); }
			}
			if (mouse) {
				dx = a.x - mouse.x; dy = a.y - mouse.y; d = Math.sqrt(dx * dx + dy * dy);
				if (d < 210) {
					ctx.strokeStyle = 'rgba(' + GREEN + ',' + (1 - d / 210) * .55 + ')';
					ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
				}
			}
		}
		for (i = 0; i < nodes.length; i++) {
			a = nodes[i];
			if (a.hub) {
				var pr = 10 + Math.sin(t / 700 + a.ph) * 4;
				var g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, pr * 2.4);
				g.addColorStop(0, 'rgba(' + GREEN + ',.5)'); g.addColorStop(1, 'rgba(' + GREEN + ',0)');
				ctx.fillStyle = g; ctx.beginPath(); ctx.arc(a.x, a.y, pr * 2.4, 0, 6.29); ctx.fill();
				ctx.strokeStyle = 'rgba(' + GREEN + ',.55)'; ctx.beginPath(); ctx.arc(a.x, a.y, pr, 0, 6.29); ctx.stroke();
			}
			ctx.fillStyle = a.hub ? 'rgba(235,255,240,.95)' : 'rgba(190,240,235,.7)';
			ctx.beginPath(); ctx.arc(a.x, a.y, a.hub ? a.r + 1.4 : a.r, 0, 6.29); ctx.fill();
		}
		for (i = pulses.length - 1; i >= 0; i--) {
			var p = pulses[i]; p.p += p.s * dt;
			dx = p.a.x - p.b.x; dy = p.a.y - p.b.y;
			if (p.p >= 1 || dx * dx + dy * dy > LINK * LINK * 1.6) { pulses.splice(i, 1); continue; }
			var px = p.a.x + (p.b.x - p.a.x) * p.p, py = p.a.y + (p.b.y - p.a.y) * p.p;
			var pg = ctx.createRadialGradient(px, py, 0, px, py, 9);
			pg.addColorStop(0, 'rgba(210,255,200,.95)'); pg.addColorStop(.35, 'rgba(' + GREEN + ',.6)'); pg.addColorStop(1, 'rgba(' + GREEN + ',0)');
			ctx.fillStyle = pg; ctx.beginPath(); ctx.arc(px, py, 9, 0, 6.29); ctx.fill();
		}
	}

	function loop(t) {
		if (!running) { return; }
		step(t);
		window.requestAnimationFrame(loop);
	}
	function start() { if (!running && visible && !reduce) { running = true; last = 0; window.requestAnimationFrame(loop); } }
	function stop() { running = false; }

	build();
	if (reduce) { step(0); } else { start(); }

	var resizeTimer;
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () { build(); if (reduce) { step(0); } }, 150);
	});
	host.addEventListener('mousemove', function (e) {
		var r = canvas.getBoundingClientRect();
		mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
	});
	host.addEventListener('mouseleave', function () { mouse = null; });
	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (entries) {
			visible = entries[0].isIntersecting;
			if (visible) { start(); } else { stop(); }
		}).observe(host);
	}
	document.addEventListener('visibilitychange', function () { if (document.hidden) { stop(); } else { start(); } });
}());
