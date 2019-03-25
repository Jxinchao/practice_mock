<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>返回顶部</title>


<style type="text/css">
*{margin:0;padding:0;list-style-type:none;}
a,img{border:0;}
body{font:12px/180% Arial, Helvetica, sans-serif, "新宋体";}

/* leftsead */
#leftsead{width:131px;height:143px;position:fixed;top:258px;right:0px;}
*html #leftsead{margin-top:258px;position:absolute;top:expression(eval(document.documentElement.scrollTop));}
#leftsead li{width:131px;height:53px;}
#leftsead li img{float:right;border-bottom-left-radius:5px;border-top-left-radius:5px;}
#leftsead li a{height:49px;float:right;display:block;min-width:47px;max-width:131px;}
#leftsead li a .shows{display:block;}
#leftsead li a .hides{margin-right:-166px;cursor:pointer;cursor:hand;}
#leftsead li a.youhui .hides{display:none;position:absolute;right:216px;top:2px;}
</style>

</head>

<body style="height:1600px;" >

<div id="leftsead">
	<ul>
	     <li>
			<a id="top_btn">
				<img src="templates/default/images/foot03/ll06.png" width="47" height="49" class="hides"/>
				<img src="templates/default/images/foot03/l06.png" width="47" height="49" class="shows" />
			</a>
		</li>

		<li>
			<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1511998989&site=qq&menu=yes">
				<img src="templates/default/images/foot03/ll03.png?p=2:1511998989:52"  width="47" height="49" class="hides"/>
				<img src="templates/default/images/foot03/l03.png" width="47" height="49" class="shows" />
			</a>
		</li>

				<li>
			<a target="_blank" href="https://static.meiqia.com/dist/standalone.html?_=t&eid=112106">
				<img src="templates/default/images/foot03/ll03.png"  width="47" height="49" class="hides"/>
				<img src="templates/default/images/foot03/l03.png" width="47" height="49" class="shows" />
			</a>
		</li>

		<li>
			<a href="">
					<img src="templates/default/images/foot03/ll02.png" width="166" height="49" class="hides"/>
				<img src="templates/default/images/foot03/l04.png" width="47" height="49" class="shows" />
			</a>
		</li>

		<li>
			<a class="youhui">
				<img src="templates/default/images/foot03/l02.png" width="47" height="49" class="shows" />
				<img src="templates/default/images/foot03/zfew.jpg" width="196" height="205" class="hides" usemap="#taklhtml"/>
			</a>
		</li>
	
	
	
	</ul>
</div><!--leftsead end-->


<script type="text/javascript">
$(document).ready(function(){

	$("#leftsead a").hover(function(){
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").show();
		}else{
			$(this).children("img.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("img.hides").animate({marginRight:'0px'},'slow'); 
		}
	},function(){ 
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").hide('slow');
		}else{
			$(this).children("img.hides").animate({marginRight:'-143px'},'slow',function(){$(this).hide();$(this).next("img.shows").show();});
		}
	});

	$("#top_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);});

});
</script>
</body>
</html>
