// 导航
$(function() {

	$('.masthead__main ul li').hover(function() {
		console.log($(this))
		$(this).find('.box').stop().show('slow');

	}, function() {

		$(this).find('.box').stop().hide('slow');

	});
	
	
});

// 吸顶条
$(function() {

	var titleTop = $('.banner').height();
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