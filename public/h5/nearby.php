<?php
//php插件下载地址： https://files.cnblogs.com/files/fan-bk/jssdk_php.rar
//建立一个php文件
require_once "jssdk_php/jssdk.php";  //引入下载的PHP插件
$jssdk = new JSSDK("wxb403010b1d82b7fb","51397690180be47e678d495c350a2ada");//填写公众号 密匙
$signPackage = $jssdk->GetSignPackage();

?>

<!DOCTYPE html>
<html lang="zh">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>中视联-附近</title>
	<link rel="stylesheet" href="css/rest.css" />
	<link rel="stylesheet" href="css/pub.css" />
	<link rel="stylesheet" href="css/nearby.css" />
	<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.1&key=4f14955139ebd8f49208b294820ab8bd&plugin=AMap.Autocomplete"></script>
	<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>
	<style type="text/css">
		#iCenter {
			width: 300px;
			height: 280px;
			border: 1px #000 solid;
			margin: 20px auto;
		}
	</style>
</head>

<body>
	<!-- header s -->

	<div class="headerpage"></div>
	<!-- header e -->
	<!-- mytop s -->


	
	 <div id="container" tabindex="0" style="width: 100%;height: 10.67rem;"></div>
	<!-- mytop e -->
	<!-- bottom  s -->
	<div class="footer">
		<ul>
			<li>
				<a href="index.html" class="">
					<img src="images/nav/nav_live@3x.png" alt="" />
					<p class="">直播</p>
				</a>
			</li>
			<li>
				<a href="video_1.html" class="">
					<img src="images/nav/nav_view@3x.png" alt="" />
					<p class="">视频</p>
				</a>
			</li>
			<li>
				<a href="nearby.html" class="">
					<img src="images/nav/nav_nearing@3x.png" alt="" />
					<p class="active">附近</p>
				</a>
			</li>
			<li>
				<a href="my.html" class="">
					<img src="images/nav/nav_mine@3x.png" alt="" />
					<p class="">我的</p>
				</a>
			</li>
		</ul>
	</div>
	<!-- bottom  e -->

	<!-- js 引入  S  -->
	<script src="js/jquery.min.js"></script>
	<script src="js/rem.js"></script>
	<script src="js/pubhtml.js"></script>
	<script src="js/server.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
	<script src="js/marker.js"></script>
   	<script src="https://webapi.amap.com/maps?v=1.4.13&key=4f14955139ebd8f49208b294820ab8bd"></script>
	<script>
		
//		window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=<?php echo $signPackage["appId"];?>&redirect_uri=http://live.zonlele.com/h5/nearby.php&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';


//window.location.href = 'https://m.amap.com/navi/?dest=116.470098,39.992838&destName=阜通西&hideRouteIcon=1&key=4f14955139ebd8f49208b294820ab8bd';
		var datajson = localStorage.json;  // 获取本次存储
		var obj = $.parseJSON(datajson);   // 转换json 
		wx.config({
			debug: false, //调式模式，设置为ture后会直接在网页上弹出调试信息，用于排查问题
			appId: '<?php echo $signPackage["appId"];?>',
			timestamp: <?php echo $signPackage["timestamp"];?>,
			nonceStr: '<?php echo $signPackage["nonceStr"];?>',
			signature: '<?php echo $signPackage["signature"];?>',
			jsApiList: [ // 所有要调用的 API 都要加到这个列表中
				'checkJsApi',
				'openLocation',
				'getLocation'

			]
		});
		wx.ready(function() {
			wx.checkJsApi({
				jsApiList: [
					'getLocation'
				],
				success: function(res) {
//					 alert(JSON.stringify(res));
					// alert(JSON.stringify(res.checkResult.getLocation));
					if(res.checkResult.getLocation == false) {
						alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
						return;
					}
				}
			});
			
			wx.getLocation({
				success: function(res) {
					var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					var speed = res.speed; // 速度，以米/每秒计
					var accuracy = res.accuracy; // 位置精度
					var datas;
					var map = new AMap.Map('container',{resizeEnable: true,zoom:10});
					$.ajax({
						type:"get",
						url: host + '?service=Home.GetNearby',
						dataType: 'json',
						data: {
							uid: obj.id,
							lng: longitude,
							lat: latitude
						},
						success: function(data) {
							datas = data.data.info[0].live;			
					        var markers = []; //province见Demo引用的JS文件
					        for (var i = 0; i < datas.length; i += 1) {
								var marker;
								var str = ''+datas[i].lng+''+','+''+datas[i].lat+''
			
								
								
								var icon = new AMap.Icon({
									image: datas[i].avatar_thumb,
									size: new AMap.Size(50, 50),
									imageSize: new AMap.Size(64,64)
								});
								marker = new AMap.Marker({
					             	icon: icon,
									position: str.split(','),
									title: datas[i].province,
									map: map
								});
								marker.uid = datas[i].uid;
								//点标注的点击事件
			                    marker.on('click', function(e) {
			                        window.location.href = 'recording.html?&uid='+ e.target.uid;
			                    });
			
								markers.push(marker);
					    	}
						},
						error: function(e) {
							alert(2)
						}
					});
					
					map.setFitView();
				},
				cancel: function(res) {
					alert('用户拒绝授权获取地理位置');
				}
			});

		});
		wx.error(function(res) {
			//alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
		});
		
				
	
	</script>
	 <script type="text/javascript" src="https://webapi.amap.com/demos/js/liteToolbar.js"></script>
	 
	 
	 <style>
	 	.amap-icon{
	 		border-radius: 50%;
	 	}
	 	.amap-icon img{
	 		width: 100%;
	 		height: 100%;
	 	}
	 </style>
	<!-- js 逻辑  E-->

</body>

</html>