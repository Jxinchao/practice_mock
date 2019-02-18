// con 点击tab切换  新闻稿件 媒体报道
//			$('#tit a').click(function() {
//				var i = $(this).index(); //下标第一种写法
//				$(this).addClass('active').siblings().removeClass('active');
//				$('iframe').eq(i).show();
////				$('.modal').eq(i).show();
//				$('iframe').eq(!i).hide();
////				$('.modal').eq(!i).hide();
//			});
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
			
			$("#jia_1").click(function(){
				var _that = $(this);
		    	$("#jia1").slideToggle('slow',function(){
		    		if ($(this).is(':hidden')) {

					_that.find('img').attr("src",'../images/qiye/j.png')
					
					}else{
						_that.find('img').attr("src",'../images/qiye/jian.png')
					}
		    	});
		    	
		    	
		    })
		     $("#jia_2").click(function(){
		    	var _that = $(this);
		    	$("#jia2").slideToggle('slow',function(){
		    		if ($(this).is(':hidden')) {

					_that.find('img').attr("src",'../images/qiye/j.png')
					
					}else{
						_that.find('img').attr("src",'../images/qiye/jian.png')
					}
		    	});
		    })