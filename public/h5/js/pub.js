$(function() {
	$('#navtop ul li').on('click', function() {
		//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
		　　　　
		$(this).find('a').addClass("active").parents().siblings().find('a').removeClass("active");　　　　 //获取选中元素的下标
		　　　　
		var index = $(this).index();　　　　
		$('.lists').eq(index).show().siblings('.lists').hide();
		myscroll.scrollTo(0, 0);
		myscroll.refresh();
		myscrolls.scrollTo(0, 0);
		myscrolls.refresh();
		t_myscroll.scrollTo(0, 0);
		t_myscroll.refresh();
		n_myscroll.scrollTo(0, 0);
		n_myscroll.refresh();
		v_myscroll.scrollTo(0, 0);
		v_myscroll.refresh();
	})
	pullOnLoad(); // 热门
	t_pullOnLoad() // 推荐
	attention(); // 关注
	n_pullOnLoad(); // 男神
	v_pullOnLoad(); // 女神
});

// 热门
var myscroll = new iScroll("wrapper", {
	onScrollMove: function() { //拉动时
		//上拉加载
		if(this.y < this.maxScrollY) {
			$(".pull-loading").html("释放加载");
			$(".pull-loading").addClass("loading");
		} else {
			$(".pull-loading").html("上拉加载");
			$(".pull-loading").removeClass("loading");
		}
	},
	onScrollEnd: function() { //拉动结束时
		//上拉加载
		if($(".pull-loading").hasClass('loading')) {
			$(".pull-loading").html("上拉加载");
			pullOnLoad();
		}
	}
});

// 推荐
var t_myscroll = new iScroll("t_wrapper", {
	onScrollMove: function() { //拉动时
		//上拉加载
		if(this.y < this.maxScrollY) {
			$(".pull-loading").html("释放加载");
			$(".pull-loading").addClass("loading");
		} else {
			$(".pull-loading").html("上拉加载");
			$(".pull-loading").removeClass("loading");
		}
	},
	onScrollEnd: function() { //拉动结束时
		//上拉加载
		if($(".pull-loading").hasClass('loading')) {
			$(".pull-loading").html("上拉加载");
			t_pullOnLoad();
		}
	}
});

// 男神
var n_myscroll = new iScroll("n_wrapper", {
	onScrollMove: function() { //拉动时
		//上拉加载
		if(this.y < this.maxScrollY) {
			$(".pull-loading").html("释放加载");
			$(".pull-loading").addClass("loading");
		} else {
			$(".pull-loading").html("上拉加载");
			$(".pull-loading").removeClass("loading");
		}
	},
	onScrollEnd: function() { //拉动结束时
		//上拉加载
		if($(".pull-loading").hasClass('loading')) {
			$(".pull-loading").html("上拉加载");
			n_pullOnLoad();
		}
	}
});

// 女神
var v_myscroll = new iScroll("v_wrapper", {
	onScrollMove: function() { //拉动时
		//上拉加载
		if(this.y < this.maxScrollY) {
			$(".pull-loading").html("释放加载");
			$(".pull-loading").addClass("loading");
		} else {
			$(".pull-loading").html("上拉加载");
			$(".pull-loading").removeClass("loading");
		}
	},
	onScrollEnd: function() { //拉动结束时
		//上拉加载
		if($(".pull-loading").hasClass('loading')) {
			$(".pull-loading").html("上拉加载");
			v_pullOnLoad();
		}
	}
});

// 关注
var myscrolls = new iScroll("wrappers", {
	onScrollMove: function() { //拉动时
		//上拉加载
		if(this.y < this.maxScrollY) {
			$(".pull-loading").html("释放加载");
			$(".pull-loading").addClass("loading");
		} else {
			$(".pull-loading").html("上拉加载");
			$(".pull-loading").removeClass("loading");
		}
	},
	onScrollEnd: function() { //拉动结束时
		//上拉加载
		if($(".pull-loading").hasClass('loading')) {
			$(".pull-loading").html("上拉加载");
			attention();
		}
	}
});
//上拉加载函数,ajax  女神
var v_num = 0;
var v_p = 1;

function v_pullOnLoad() {
	setTimeout(function() {
		$.ajax({
			url: host + '?service=Home.getWoman',
			type: "get",
			dataType: 'json',
			data: {
				p: v_p
			},
			success: function(data) {
				v_p++;
				var data_length = data.data.info[0].list.length; //数据的总长度
				if(data.data.info[0].list != '') {
					for(var j = v_num; j < data_length; j++) {
						var texts = data.data.info[0].list[j].user_nicename;
						var img = data.data.info[0].list[j].avatar_thumb;
						var watch = data.data.info[0].list[j].nums;
						var rtmp = data.data.info[0].list[j].pull;

						$("#v_scroller ul").append("<li><a href='video.html?uid=" + data.data.info[0].list[j].uid + "&pmtr=" + rtmp + "&isvideo=" + data.data.info[0].list[j].isvideo + "'><img src=" + img + " alt='' /><div class='num_text'><span>" + texts + "</span><span>" + watch + "</span></div></a></li>");
					}
				} else {
					$('.pull-loading').html("我是有底线的");
				}
				v_myscroll.refresh();
			},
			error: function() {
				console.log("出错了");
			}
		});
		v_myscroll.refresh();
	}, 300);
}
//上拉加载函数,ajax  男神
var n_num = 0;
var n_p = 1;

function n_pullOnLoad() {
	setTimeout(function() {
		$.ajax({
			url: host + '?service=Home.getMan',
			type: "get",
			dataType: 'json',
			data: {
				p: n_p
			},
			success: function(data) {
				n_p++;
				var data_length = data.data.info[0].list.length; //数据的总长度
				if(data.data.info[0].list != '') {
					for(var j = n_num; j < data_length; j++) {
						var texts = data.data.info[0].list[j].user_nicename;
						var img = data.data.info[0].list[j].avatar_thumb;
						var watch = data.data.info[0].list[j].nums;
						var rtmp = data.data.info[0].list[j].pull;

						$("#n_scroller ul").append("<li><a href='video.html?uid=" + data.data.info[0].list[j].uid + "&pmtr=" + rtmp + "&isvideo=" + data.data.info[0].list[j].isvideo + "'><img src=" + img + " alt='' /><div class='num_text'><span>" + texts + "</span><span>" + watch + "</span></div></a></li>");
					}
				} else {
					$('.pull-loading').html("我是有底线的");
				}
				n_myscroll.refresh();
			},
			error: function() {
				console.log("出错了");
			}
		});
		n_myscroll.refresh();
	}, 300);
}
//上拉加载函数,ajax  推荐
var t_num = 0;
var t_p = 1;

function t_pullOnLoad() {
	setTimeout(function() {
		$.ajax({
			url: host + '?service=Home.getRecommend',
			type: "get",
			dataType: 'json',
			data: {
				p: t_p
			},
			success: function(data) {
				t_p++;
				var data_length = data.data.info[0].list.length; //数据的总长度
				if(data.data.info[0].list != '') {
					for(var j = t_num; j < data_length; j++) {
						var texts = data.data.info[0].list[j].user_nicename;
						var img = data.data.info[0].list[j].avatar_thumb;
						var watch = data.data.info[0].list[j].nums;
						var rtmp = data.data.info[0].list[j].pull;

						$("#t_scroller ul").append("<li><a href='video.html?uid=" + data.data.info[0].list[j].uid + "&pmtr=" + rtmp + "&isvideo=" + data.data.info[0].list[j].isvideo + "'><img src=" + img + " alt='' /><div class='num_text'><span>" + texts + "</span><span>" + watch + "</span></div></a></li>");
					}
				} else {
					$('.pull-loading').html("我是有底线的");
				}
				t_myscroll.refresh();
			},
			error: function() {
				console.log("出错了");
			}
		});
		t_myscroll.refresh();
	}, 300);
}

//上拉加载函数,ajax  热门
var num = 0;
var p = 1;

function pullOnLoad() {
	setTimeout(function() {
		$.ajax({
			url: host + '?service=Home.GetHot',
			type: "get",
			dataType: 'json',
			data: {
				p: p
			},
			success: function(data) {
				p++;
				var data_length = data.data.info[0].list.length; //数据的总长度
				if(data.data.info[0].list != '') {
					for(var j = num; j < data_length; j++) {
						var texts = data.data.info[0].list[j].user_nicename;
						var img = data.data.info[0].list[j].avatar_thumb;
						var watch = data.data.info[0].list[j].nums;
						var rtmp = data.data.info[0].list[j].pull;

						$("#scroller ul").append("<li><a href='video.html?uid=" + data.data.info[0].list[j].uid + "&pmtr=" + rtmp + "&isvideo=" + data.data.info[0].list[j].isvideo + "'><img src=" + img + " alt='' /><div class='num_text'><span>" + texts + "</span><span>" + watch + "</span></div></a></li>");
					}
				} else {
					$('.pull-loading').html("我是有底线的");
				}
				myscroll.refresh();
			},
			error: function() {
				console.log("出错了");
			}
		});
		myscroll.refresh();
	}, 300);
}

//上拉加载函数,ajax  关注
var nums = 0;
var ps = 1;

function attention() {
	var datajson = localStorage.json;

	if(datajson != undefined) {
		$('#denglu').hide();
		$("#scrollers").show();
		var obj = $.parseJSON(datajson);
		setTimeout(function() {
			$.ajax({
				url: host + '?service=Home.GetFollow',
				type: "get",
				dataType: 'json',
				data: {
					uid: obj.id,
					p: ps
				},
				success: function(data) {
					ps++;
					var data_length = data.data.info.length; //数据的总长度

					if(data_length != 0) {
						console.log(data)
						for(var j = nums; j < data_length; j++) {
							var tx = data.data.info[j].avatar;
							var title = data.data.info[j].title;
							var thumb = data.data.info[j].thumb;
							var user_nicename = data.data.info[j].user_nicename;
							var isURL = "'"+"video.html?uid=" + data.data.info[j].uid + "&pmtr=" + data.data.info[j].pull + "&isvideo="+data.data.info[j].isvideo+"'";
							var isdata = "'"+"recording.html?uid=" + data.data.info[j].uid + "'";
							$("#scrollers ul").append('<li><a href="javascript:;"><div class="attention_one"><div onclick="window.location.href='+isdata+'"><img src="' + tx + '"/></div><div><p>' + user_nicename + '</p><p>2018.11.23  21：33</p></div></div><div class="attention_two"><p>' + title + '</p><div onclick="window.location.href='+isURL+'"><div class="dask"></div><img src="' + thumb + '"/><span class="time">00：15</span></div><div><span>2859万次播放</span><span><em><img src="images/01.png"/></em>235万</span><span><em><img src="images/02.png"/></em>123万</span><span><em><img src="images/03.png"/></em></span></div></div></a></li>');
						}
					} else {
						$('.pull-loading').html("我是有底线的");
					}
					myscrolls.refresh();
				},
				error: function() {
					console.log("出错了");
				}
			});
			myscroll.refresh();
		}, 300);
	} else {
		$('#denglu').show();
		$("#scrollers").hide();
		$('#denglu').html("请前往我的<a href='login.html' style='color:#2DA4FB;'>登录</a>");
	}

}
