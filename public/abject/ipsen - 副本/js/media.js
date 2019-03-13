$(function() {
	// con 点击tab切换  新闻稿件 媒体报道
	$('#tit span').click(function() {
		var i = $(this).index(); //下标第一种写法
		$(this).addClass('select').siblings().removeClass('select');
		$('#con li').eq(i).show().siblings().hide();
	});

	// 显示隐藏内容
	$(".toggle").click(function(e) {
		var _that = $(this)
		$("#" + this.id + "_ .up").slideToggle('slow', function() {
			if($(this).is(':hidden')) {
				
				_that.find('img').attr("src", '../images/down.png')

			} else {
				$(this).css('display','block')
				_that.find('img').attr("src", '../images/up.png')
			}
		});

	});

})