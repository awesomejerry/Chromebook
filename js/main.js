(function () {
	$(document).ready(function () {
		var contents = $('.content > *').hide();
		$(contents[0]).show();
		var $url = $('.url input');
		$url.val($(contents[0]).attr('src'));

		var tabs = $('.tab').on('click', function () {
			tabs.removeClass("selected");
			var self = $(this);
			self.addClass("selected");
			contents.hide();
			$('#' + self.attr('for')).show();
			$url.val($('#' + self.attr('for')).attr('src'));
		});

		var bookmarks = $('.bookmark').on('click', function () {
			tabs.removeClass("selected");
			var self = $(this);
			self.addClass("selected");
			contents.hide();
			$('#' + self.attr('for')).show();
			$url.val(self.text());
			if (self.attr('for') == 'aboutme')
				$('#' + self.attr('for')).find('iframe')[0].src += "";
		});


		var winSwitch = $('.win-btn-switch').on('click', function () {
			toggleFullScreen();
			$('.desktop').toggleClass('HIDE');
		});

		var winClose = $('.win-btn-close').on('click', function () {
			$('body').empty();
		});

		var winMini = $('.win-btn-mini').on('click', function () {
			$('.browser').addClass('HIDE');
			$('.wallpaper').removeClass("HIDE");
		});

		var chromeApp = $('.chrome-app').on('click', function () {
			$('.browser').toggleClass("HIDE");
			$('.wallpaper').toggleClass("HIDE");
		});

		var homeBtn = $('.home').on('click', function () {
			window.location.reload();
		});

		var reloadBtn = $('.reload').on('click', function () {
			var page = $('.content *:visible');
			if (page[0].tagName == 'IFRAME')
				page[0].src += "";
		});

		var menuBtn = $('.menu-btn').on('click', function () {
			var $menu = $('.menu');
			$menu.toggleClass("SHOW");
			$(this).toggleClass("ACTIVE");
		});

		var menus = $('.menu > ul > li').hover(function () {
			var $menu = $(this);
			$menu.find('.sub-menu').toggleClass("SHOW");
		});

		var options = {
			$AutoPlay: true,
			$AutoPlayInterval: 3000
		};
		var jssor_slider1 = new $JssorSlider$('slider1_container', options);
		startTime();
		
		function toggleFullScreen() {
			var elem = document.documentElement;
			if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
				if (elem.requestFullScreen) {
					elem.requestFullScreen();
				} else if (elem.mozRequestFullScreen) {
					elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullScreen) {
					elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if (elem.msRequestFullscreen) {
					elem.msRequestFullscreen();
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		}

		function startTime() {
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			m = checkTime(m);
			s = checkTime(s);
			document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
			var t = setTimeout(function () {
				startTime()
			}, 500);
		}

		function checkTime(i) {
			if (i < 10) {
				i = "0" + i
			}; // add zero in front of numbers < 10
			return i;
		}
	});
})()