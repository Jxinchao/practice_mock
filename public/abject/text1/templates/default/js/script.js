/**
 * Created by yjf on 2016/12/26.
 */

$(function() {

    var IS_DEV = /(localhost|127.0.0.1|192.168)/.test(location.hostname);
    var originHost = 'http://' + '192.168.3.117:8084';
    var serverPath = IS_DEV ? originHost + '/main-site/action' : location.origin + '/main/action';
    var sendcompanyUrl = serverPath + '/home/sendCompanyPhysicalExamEmail';
    var senduserUrl = serverPath + '/home/sendUseApplicationEmail';

    $('.imgCode').attr('src', serverPath + '/validationCode')

    IS_DEV && $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
    //轮播
    $('.carousel').carousel({
        interval: 2000
    });

    //显示医院列表
    var hosList = [{
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/hzlyy.png',
        name: '杭州疗养院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/syf.png',
        name: '邵逸夫'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/zy.png',
        name: '浙一'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/bjyy.png',
        name: '北京友谊'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/bjaz.png',
        name: '北京安贞'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/njgl.png',
        name: '南京鼓楼'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/hzsy.png',
        name: '杭州市一'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/qfs.png',
        name: '山东千佛山医院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/bbyf.png',
        name: '蚌埠一附院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/sdyf.png',
        name: '苏大一附院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/ncdxef.png',
        name: '南昌大学二附院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/bjzl.png',
        name: '北京肿瘤医院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/hnjq.png',
        name: '河南军区医院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/xtzx.png',
        name: '湘潭中心医院'
    }, {
        img: '//mytijian-img.oss-cn-hangzhou.aliyuncs.com/official-web/gfey.png',
        name: '广医二院'
    }, ];
    var content = '';
    for (var i = 0; i < hosList.length; i++) {
        content += '<li class="tj-section-hos"><img src="' + hosList[i].img + '"><p>' + hosList[i].name + '</p></li>'
    }
    $('.tj-section-hoslist').html(content);

    //链接替换
    $('#tj-yy, #about-tj, #report-tj').attr('href', '//' + location.host + '/m/mt/welcome');
    $('#tj-look').attr('href', '//' + location.host + '/m/mt/hospital');

    //发送邮件
    $('#applySubmit').click(function(event) {
        var lxname = $('#lxname').val();
        var lxphone = $('#lxphone').val();
        var tjname = $('#tjname').val();
        var tjverification = $('#verification').val();
        var obj = {
            contactName: lxname,
            contactNumber: lxphone,
            hospitalName: tjname,
            officialVerificationCode: tjverification
        };
        $.ajax({
            url: senduserUrl,
            type: 'POST',
            data: obj,
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        }).done(function(data) {

            if (data.content && data.content.code == 6) {
                $('.imgCode').next().addClass('errowverification')
                setTimeout(function() {
                    $('.imgCode').next().removeClass('errowverification')
                }, 1500)
                return
            } else if (data.content && data.content.code == 1) {
                window.alert(data.content.text)
                return
            };

            if (!data.responseStatusCode) {
                for (var p in $('.apply-row input')) {
                    $('.apply-row input')[p].value = '';
                }
                window.alert('发送成功')
            };

            checkInputArr()

        }).fail(function(xhr) {
            window.alert('发送失败')
        })
    });

    $('#applyTJ').click(function(event) {
        var tjCompany = $('#tjCompany').val();
        var tjName = $('#tjName').val();
        var tjPhone = $('#tjPhone').val();
        var tjRole = $('#tjRole').val();
        var tjVerification = $('#tjVerification').val();
        var obj = {
            businessName: tjCompany,
            contactName: tjName,
            contactNumber: tjPhone,
            contactPost: tjRole,
            officialVerificationCode: tjVerification
        };
        $.ajax({
            url: sendcompanyUrl,
            type: 'POST',
            data: obj,
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            success: function(data) {

                if (data.content && data.content.code == 6) {
                    $('.imgCode').next().addClass('errowtjVerification')
                    setTimeout(function() {
                        $('.imgCode').next().removeClass('errowtjVerification')
                    }, 1500)
                    return
                } else if (data.content && data.content.code == 1) {
                    window.alert(data.content.text)
                    return
                };

                if (!data.responseStatusCode) {
                    for (var p in $('.apply-row input')) {
                        $('.apply-row input')[p].value = '';
                    }
                    window.alert('发送成功')
                };

                checkInputArr()

            },
            error: function(data) {
                window.alert('发送失败');
            }
        });
    });

    // 邮箱验证码更改
    function changeVerification(selector) {
        $(selector).click(function() {
            var timestamp = (new Date()).valueOf();
            var img = $(".imgCode")[0];
            if (img) {
                img.src = img.src +
                    "?time=" + timestamp;
            }
        })
    }
    changeVerification('.imgCode')
    changeVerification('#applyTJ')
    changeVerification('#applySubmit')


    // 名称过长

    $('#lxname,#lxphone,#tjname, #tjCompany, #tjName, #tjPhone, #tjRole, #tjVerification').blur(function() {
        var $this = $(this);
        if ($this.val().length > 50) {
            $this.next().addClass('errow' + $this.attr('id'))
        } else {
            $this.next().removeClass('errow' + $this.attr('id'))
        }
    })

    //导航 切换
    function tabInit(selector) {
        var $tab = $(selector);
        for (var i = 0; i < $tab.length; i++) {
            var $obj = $($tab[i]);
            var $first = $($obj.children()[0]);
            $first.addClass('current');
            var id = $first.data('target');
            if (id) {
                var $target = $(document.getElementById(id));
                $target.siblings().hide();
                $target.show();
            }
        }
        $tab.on('click', function(event) {
            event.preventDefault();
            var $source = $(event.target);
            if ($source.hasClass('current')) return;
            $source.siblings().removeClass('current');
            $source.addClass('current');
            var id = $source.data('target');
            if (id) {
                var $target = $(document.getElementById(id));
                $target.siblings().hide();
                $target.show();
            }
        });
    }
    tabInit(".tj-about-menu");
    tabInit(".tj-tabs-head");

    //表单处理 输入框为空，提交按钮禁用
    var inputArr = $('.apply-box').find('input');
    //input 绑定事件
    for (var i = 0; i < inputArr.length; i++) {
        var $input = $(inputArr[i]);
        $input.on('input', function() {
            checkInputArr();
        });
    }
    var $button = $($('.apply-box').find('button'));
    //初始化
    checkInputArr();
    //检查input，设置按钮状态
    function checkInputArr() {
        for (var i = 0; i < inputArr.length; i++) {
            var value = inputArr[i].value;
            if (!value || value.trim() == '') {
                $button.attr("disabled", true);
                return;
            }
        }
        $button.attr("disabled", false);
    }
});
