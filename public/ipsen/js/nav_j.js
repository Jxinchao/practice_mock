//内容信息导航吸顶
	$(document).ready(function() {
		var navHeight = $(".banner").height();
		var navFix = $("#nav_wrap");
		$(window).scroll(function() {
			if($(this).scrollTop() > navHeight) {
				navFix.addClass("navFix");
				navFix.addClass("nav_top");
				//						console.log($(this).scrollTop(),navHeight)
			} else {
				//						console.log(1)
				navFix.removeClass("nav_top");
				navFix.removeClass("navFix");
			}
		})
	})
	//内容信息导航锚点
	$('.nav_wrap').navScroll({
		mobileDropdown: true,
		mobileBreakpoint: 768,
		scrollSpy: true
	});