// 导航
$(function(){

  $('.nav li').hover(function(){
		
    $(this).children('ul').stop().show('slow');
    

  },function(){

    $(this).children('ul').stop().hide('slow');

  });

});


// 2019/2/20  statr
// new 轮播图

$(function() {
	$(".cn-nav>li").last().children('ul.sub').children("ul").css("right",'100%')
	$(".box ul li:first").clone().appendTo($(".box ul"));
	var $key=0; /* 控制整图片播放的关键变量*/
	/* 克隆第一张，作为最后一张*/
	
	var $circle=0;/* 控制小圆点的播放*/
	/*开始定时器*/

	var timer=setInterval(autoplay,5000);
	function autoplay(){

			$key++; /* 当前处于第一张，播放第二张，所以先++*/  // 先++ 后判断  再执行

		/*alert("aa");*/
		/*动画  animate()*/
		/*ul 的left 的值     $key* 盒子的宽度*/
		/*下面是判断图片的播放*/
		if($key>$(".box ul li").length-1)
		{
			$key=1;/* 因为我们的第五张图片，看做是第一张，所以，我下次要去第二张，第二张的索引号值1*/
			$(".box ul").css("left",0); /* 先瞬时间跳转 原点  黄色闪电*/
		}
		$(".box ul").stop().animate({"left":-$key*$(".box ul li").width()},1000);  /*缓缓滑动*/

        /*判断小圆点的播放*/
		$circle++;
		if($circle>$(".box ol li").length-1)  /*因为是4个点，最大的索引号是3  当大于3 就返回 0*/
		{
			$circle=0;  
		}
		$(".box ol li").eq($circle).addClass('current').siblings().removeClass('current');


	}

	/*鼠标经过停止定时器*/
	$(".box").hover(function() {
		clearInterval(timer);
		timer=null;
	}, function() {/* 鼠标离开 开启定时器*/
		clearInterval(timer);
		timer=setInterval(autoplay, 5000);
	});
	 $(".box ol li").click(function(event) {
	 	$(this).addClass('current').siblings().removeClass('current');
	 	$key=$(this).index();
	 	$circle=$(this).index();
	 	$(".box ul").stop().animate({"left":-$key*$(".box ul li").width()}, 1000);
	 });
	 

	 //图片轮播结束
	
});

// 2019/2/20  end

// 轮播图
$(function(){
	// 2019/2/20  statr
    // 轮播图
//  var swiper = new Swiper('.swiper-container_one', {
//    pagination: {
//      el: '.swiper-pagination',
//      clickable :true,
//    },
//    loop : true,
//    autoplay:true,
//  });
// 2019/2/20  end
    // 轮播图 two
    var swipers = new Swiper('.swiper-container_two', {
     slidesPerView: 4,
     spaceBetween: 0,
     slidesPerGroup: 1,
     loop: true,
     autoplay:3000,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
   //鼠标移出隐藏按钮，移入显示按钮
//		swipers.el.onmouseover=function(){
//		    swipers.navigation.$nextEl.removeClass('hide');
//		    swipers.navigation.$prevEl.removeClass('hide');
//		}
//		swipers.el.onmouseout=function(){
//		    swipers.navigation.$nextEl.addClass('hide');
//		    swipers.navigation.$prevEl.addClass('hide');
//		}
})
