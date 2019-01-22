$(function(){
    // con 点击tab切换  新闻稿件 媒体报道
    $('#tit span').click(function() {
        var i = $(this).index();//下标第一种写法
        //var i = $('tit').index(this);//下标第二种写法
        $(this).addClass('select').siblings().removeClass('select');
        $('#con li').eq(i).show().siblings().hide();
    });

    // 显示隐藏内容
    $(".toggle").click(function(e) {
        console.log(this.id)
       // $(".content").slideToggle();
       $("#"+this.id+"_").slideToggle();
    });
    // $(".top_div").click(function(){
    //  $("#"+this.id+"_").toggle();
    // });
})