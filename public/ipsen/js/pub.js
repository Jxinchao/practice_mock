// 导航
$(function(){

  $('.nav li').hover(function(){

    $(this).children('ul').stop(true,true).show('slow');

  },function(){

    $(this).children('ul').stop(true,true).hide('slow');

  });

});