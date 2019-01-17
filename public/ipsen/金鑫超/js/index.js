$(function(){
       //最小高  滚动控制
       var scrollTop = 0;
       var bottomTop = $("body").height() - $(window).height();
       var minHeight = function() {
           var wHeight = $(window).height();
           $(".common_bodyer").css("minHeight", wHeight - 340);
       }
       minHeight();
       $(window).resize(function() {
           bottomTop = $("body").height() - $(window).height();
           minHeight();
       })

       $(window).scroll(function() {
           scrollTop = $(document).scrollTop(); 
           console.log(scrollTop)
           if (scrollTop > 100) {
               $(".header_content").addClass("cur");
               $('.header_aBlock').css({"color":"blue"})
           } else {
               $(".header_content").removeClass("cur");
               $('.header_aBlock').css({"color":"#fff"})
           }
           //            if (scrollTop <= -bottomTop + 50) {
           //                $(".back-foot").addClass("cur")
           //            } else {
           //                $(".back-foot").removeClass("cur")
           //            }
       })
// 导航



    $('.header_ulBlock a').hover(function(){
        console.log($(this))
        $(this).addClass("nav_cur");
        $(this).children('div').stop(true,true).show('slow');
  
    },function(){
        $(this).removeClass("nav_cur");
        $(this).children('div').stop(true,true).hide('slow');
  
    });
// 轮播图
    var t = n = 0,
    count;
    count = $("#banner_list a").length;
    $("#banner_list a:not(:first-child)").hide();
    $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
    $("#banner_info").click(function() {
        window.open($("#banner_list a:first-child").attr('href'), "_blank")
    });
    $("#banner li").click(function() {
        var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
        n = i;
        if (i >= count) return;
        $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
        $("#banner_info").unbind().click(function() {
            window.open($("#banner_list a").eq(i).attr('href'), "_blank")
        }) 
        $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        document.getElementById("banner").style.background = "";
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 4000);
    $("#banner").hover(function() {
        clearInterval(t)
    },
    function() {
        t = setInterval(showAuto(), 4000);
    });
    function showAuto() {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }
})