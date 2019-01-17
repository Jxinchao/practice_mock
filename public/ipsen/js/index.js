// 导航
$(function(){

  $('.nav li').hover(function(){

    $(this).children('ul').stop().show('slow');

  },function(){

    $(this).children('ul').stop().hide('slow');

  });

});





// 轮播图
$(function(){
    // 轮播图
    var swiper = new Swiper('.swiper-container_one', {
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
      loop : true,
      autoplay:true,
    });
    // 轮播图 two
    var swipers = new Swiper('.swiper-container_two', {
     slidesPerView: 4,
     spaceBetween: 0,
     slidesPerGroup: 1,
     loop: true,
     autoplay:true,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });
   //鼠标移出隐藏按钮，移入显示按钮
  swipers.el.onmouseover=function(){
    swipers.navigation.$nextEl.removeClass('hide');
    swipers.navigation.$prevEl.removeClass('hide');
  }
  swipers.el.onmouseout=function(){
    swipers.navigation.$nextEl.addClass('hide');
    swipers.navigation.$prevEl.addClass('hide');
  }
})
