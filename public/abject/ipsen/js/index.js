$(function() {
	var titleTop = 865;//$('.bannner').height();
	console.log(titleTop)
	$(document).on('scroll', function() {
		if($(document).scrollTop() > titleTop) {
			
			$('.headers').css({
				"position": "fixed",
				"top": 0,
				"display": "block"
			})
			$('.hrt').css({
				"position": "absolute"
			})
		} else {
			$('.hrt').css({
				"position": "fixed"
			})
			$('.headers').css({
				"display": "none"
			})
		}
	})
})

// 导航
$(function() {

	$('.masthead__main ul li').hover(function() {

		$(this).find('.box').stop().show('slow');

	}, function() {

		$(this).find('.box').stop().hide('slow');

	});

});