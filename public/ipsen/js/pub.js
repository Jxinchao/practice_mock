// 导航
$(function() {

	$('.masthead__main ul li').hover(function() {

		$(this).find('.box').stop().show('slow');

	}, function() {

		$(this).find('.box').stop().hide('slow');

	});

});
// 吸顶条
$(function() {

	var titleTop =0  //$('.headers').offset().top;

	$(document).on('scroll', function() {
		if($(document).scrollTop() > titleTop) {
			$('.headers').css({
				"position": "fixed",
				"top": 0,
				"display": "block"
			})
		} else {
			$('.headers').css({
				"display": "none"
			})
		}
	})
})