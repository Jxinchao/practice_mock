<?php 
    require_once(dirname(__FILE__).'/include/config.inc.php'); 
    if(isset($_POST['nickname'])) {
        $post     = $_POST;
        $nickname = trim($post['nickname']);
        $content  = trim($post['content']); 
        $posttime = time();

        if(empty($nickname) || empty($content)) {
          echo "<script> alert('请认真填写信息!');location.href=document.referrer;</script>";
        } else {
              $dosql->Execute("insert into `#@__message` (nickname, content,posttime,checkinfo) values('$nickname', '$content', '$posttime', 'false')");
              echo "<script> alert('申请成功!');location.href=document.referrer;</script>";
              require('email.php');
        }
    }

?>
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Cache-Control" content="no-transform" /> 
<meta http-equiv="Cache-Control" content="no-siteapp" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes" />
        <meta name="tjport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="康心联盟，医疗绿通，在线问诊，找医生" />
        <meta name="description" content="康心联盟致力于通过“互联网+医疗”的方式提高全民健康水平，解决老百姓“就医难”的核心难题。目前平台已接入北、上、广、深等全国近100个城市，2000家二甲以上公立医院，建立了线上专科问诊和线下大病绿通两大服务体系！" />
        <link rel="shortcut icon" href="templates/default/images/1111.png">
        <title>康心联盟-中国领先的互联网医疗服务平台</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="templates/default/style/bootstrap.min.css">
    
    <link rel="stylesheet" href="templates/default/style/style.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you tj the page via file:// -->
    <!--[if lt IE 9]>
    <script src="static/js/html5shiv.min.js"></script>
    <script src="static/js/respond.min.js"></script>
    <![endif]-->
      <style>
      .pl35{ padding-left: 35px; }.pr35{ padding-right: 35px;} .bg-center{ background-position: center; background-repeat: no-repeat; background-size: cover; }
      .qd-container { width: 1100px; margin: 0 auto; background-color: inherit; padding-top: 30px;}
      .layout-table{ display: table;} .layout-cell{ display: table-cell; }

      .qd-section-hd { text-align: center;margin-top: 40px; height: 0; background-color: inherit;}
      .qd-section-hd-txt { font-size: 30px; font-weight: 400; position: relative; top:-.6em; padding: 0 35px;}
      .qd-section-hd{ position: relative; }
      .qd-section-hd::after, .qd-section-hd::before{ content:''; display: block; position: absolute; top:-1px; height: 1px; background-color: #D6D6D6;}
      .qd-section-hd::after{ left: 0; right: 60%; }
      .qd-section-hd::before{ right: 0; left: 60%; }
      .qd-section-sub-hd { text-align: center; font-size: 20px; color:#999; line-height: 3; margin-bottom: 30px;}

      .qd-banner{ height: 400px; background-color:#3277DE; }

      .qd-hzys { height: 560px; background: #fff;}
      .qd-hzys-list,.qd-ability-list { width: 100%; text-align: center; }
      .qd-hzys-icon { width: 235px;height: 235px; display: inline-block;}
      .qd-hzys-hd { font-size: 22px; font-weight: 400; margin-top: 10px;}
      .qd-hzys-desc { font-size: 18px; line-height: 1.6; color:#999; margin-top: 20px;}

      .qd-ability{ background: #F3F4F9; height: 615px;}
      .qd-ability-icon{ font-size: 140px; }
      .qd-ability-item-inner{ background: #fff; height: 380px; width: 320px; display: inline-block;-webkit-transition: all .2s linear; transition: all .2s linear;}
      .qd-ability-item-inner:hover{ -webkit-box-shadow:0 3px 20px rgba(0,0,0,.1); -moz-box-shadow: 0 3px 20px rgba(0,0,0,.1); box-shadow: 0 3px 20px rgba(0,0,0,.1);-webkit-transform: translate3d(0,-2px,0); transform: translate3d(0,-2px,0);}
      .qd-ability-ul { list-style: none; padding: 0; margin: 0; width: 100%; list-style: none; margin-top: 30px;}
      .qd-ability-li { text-align: left; margin-left: 30px; line-height: 40px; color: #999; font-size: 16px;}
      .qd-ability-list-icon { font-size: 38px; vertical-align: -13px; }

      .qd-cooperation { height: 800px; background: #fff; }
      .qd-cooperation .qd-section-hd::after{ right: 64%; }
      .qd-cooperation .qd-section-hd::before{ left: 64%; }
      .qd-cooperation-more{ text-align: center; font-size: 20px; color: #999; margin-top: 30px;}

      .qd-map { height: 800px;}

      .qd-partner { height: 515px;}
      .qd-partner .qd-section-hd{ border-color: #fff;}
      .qd-partner .qd-section-hd-txt,.qd-partner .qd-section-sub-hd {color:#fff;}

      .tj-section-tj .qd-section-hd{ margin: 20px 0 30px; }

      /* 背景图片 */
      .qd-banner { background-image: url('templates/default/images/bg-qd-banner.png'); }
      .qd-cooperation-img { background-image: url('templates/default/images/bg-partner-hospital.png'); height: 550px; }
      .qd-map { background-image: url('templates/default/images/bg-map.png');}
      .qd-partner { background-image: url('templates/default/images/bg-partner-company.png'); }
      .qd-partner-img { background-image: url('templates/default/images/bg-partner.png'); height: 236px;}

      .webp .qd-banner { background-image: url('templates/default/images/bg-qd-banner.png'); }
      .webp .qd-cooperation-img { background-image: url('templates/default/images/bg-partner-hospital.png');}
      .webp .qd-map { background-image: url('templates/default/images/bg-map.png');}
      .webp .qd-partner { background-image: url('templates/default/images/bg-partner-company.png'); }
      .webp .qd-partner-img { background-image: url('templates/default/images/bg-partner.png');}
      .tj-bg-box.cyw{width:418px;height:475px;background-image:url("templates/default/images/cyw.png");}
      .tj-bg-box.cxx{width:418px;height:475px;background-image:url('templates/default/images/cxx.png');}
      </style>
    </head>
    <body>
      <!-- Header S-->
      <div class="tj-container">
        <div class="tj-header clearfix">
            <a href="/?v=1" class="tj-logo pull-left">
                <div class="tj-bg-box bg-logo"></div>
            </a>
            <ul class="tj-nav pull-left">
                <li><a href="index.php" class="current">首页</a></li>
                <li><a href="channel.html">渠道合作</a></li>
                <li><a href="about.html">关于我们</a></li>
            <li><a href="xw.php">新闻中心</a></li>
            </ul>
          </div>
      </div>
        <!-- Header E-->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="templates/default/picture/banner1.png" >
                </div>
                <div class="item">
                    <img src="templates/default/picture/banner2.png" >
                </div>
                
                <div class="item">
                    <img src="templates/default/picture/banner1.png">
                </div>

            </div>
        </div>

        <div class="tj-section">
            <h2>
                <hr>
                <span>康心联盟特色功能</span>
                <hr>
            </h2>
            <div class="tj-tabs">
                <ul class="tj-tabs-head clearfix">
                    <li class="tj-tab-title" data-target="idx5">
                        家庭医生
                    </li>
                    <li class="tj-tab-title" data-target="idx6">
                        挂号小秘书
                    </li>
                    <li class="tj-tab-title" data-target="idx7">
                        专科在线问诊
                    </li>
                    <li class="tj-tab-title" data-target="idx8">
                        重疾绿通
                    </li>
                    <li class="tj-tab-title" data-target="idx9">
                        健康储备金
                    </li>
                </ul>
                <div class="tj-tabs-content">
                    <div class="tj-tab-pane" id="idx5">
                        <p>
                            50人家庭医师团队全天在线，1分钟回答医疗健康咨询
                        </p>
                        <div class="tj-bg-box bg-3"></div>
                    </div>
                    <div class="tj-tab-pane" id="idx6">
                        <p>
                            全国近2000家二甲以上医院代理预约挂号，1个工作日反馈预约结果
                        </p>
                        <div class="tj-bg-box bg-tjdx"></div>
                    </div>
                    <div class="tj-tab-pane" id="idx7">
                        <p>
                            内科、外科、皮肤科、中医科等15个科室，近千名北京、上海顶级三甲医院专家在线问诊
                        </p>
                         <div class="tj-bg-box bg-tjjd"></div>
                    </div>
                    <div class="tj-tab-pane" id="idx8">
                        <p>
                            北、上、广、深等顶级三甲医院副主任级以上专家面诊预约，2个工作日反馈，7个工作日安排就诊
                        </p>
                         <div class="tj-bg-box bg-cxx" style="width:418px;height:475px;background-image:url('templates/default/images/cxx.png')"></div>
                    </div>
                    <div class="tj-tab-pane" id="idx9">
                        <p>
                            注册激活即开通大病医疗储备金账户，首次激活及续费，均可获得储备金1000元
                        </p>
                         <div class="tj-bg-box bg-cyw" style="width:418px;height:475px;background-image:url('templates/default/images/cyw.png')"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tj-section-bgc">
            <div class="tj-section clearfix">
                <h2 style="margin-bottom: 70px">
                    <hr>
                    <span>"四个一"服务工程</span>
                    <hr>
                </h2>
                <div class="tj-section-p">
                    <h3>建立一份家庭档案</h3>
                    <p>
                        为家庭成员建立完整的健康数据、体检记录、诊疗档案，记录药物过敏史，用药禁忌情况等为诊疗提供参考
                    </p>
                </div>
                <div class="tj-section-p">
                    <h3>配备一个家庭医生</h3>
                    <p>
                        为每个家庭配备家庭医生，提供专属的医疗咨询和健康管理
                    </p>
                </div>
                <div class="tj-section-p">
                    <h3>开辟一条绿色通道</h3>
                    <p>
                        建立大病重症应急机制，在突发大病情况下能够得到及时治疗
                    </p>
                </div>
                <div class="tj-section-p">
                    <h3>搭建一份医疗保障</h3>
                    <p>
                        结合分级诊疗、健康体检、大病公益救助等，完善医疗保障体系
                    </p>
                </div>
            </div>
        </div>
        <!--
        <div class="tj-section clearfix">
            <h2 style="margin-bottom: 70px">
                <hr>
                <span>移动在线的私人健康管家</span>
                <hr>
            </h2>
            <div class="tj-section-img">
                <h3>医生在线</h3>
                <img src="templates/default/picture/4.png">
                <p>专业医生一对一在线服务，帮您审核检前评估结果、定制体检项目、解答健康问题、解读体检报告</p>
            </div>
            <div class="tj-section-img">
                <h3>高危评估</h3>
                <img src="templates/default/picture/5.png">
                <p>您的基本信息、体检数据、生活习惯、疾病史集约管理，通过疾病风险预测模型，预测您可能存在的健康风险，进行科学的健康评估</p>
            </div>
            <div class="tj-section-img">
                <h3>推荐服务</h3>
                <img src="templates/default/picture/6.png">
                <p>根据评估结果，提供日常保健建议、疾病预防建议、医疗服务建议、疾病保险建议，积极干预，健康每天</p>
            </div>
        </div>
        -->
        <div class="qd-cooperation">
          <div class="qd-container">
            <h2 class="qd-section-hd"><span class="qd-section-hd-txt">部分合作医院资源</span></h2>
            <p class="qd-section-sub-hd">全国近2000家二甲级以上医院</p>
            <div class="qd-cooperation-img bg-center"></div>
            <div class="qd-cooperation-more">持续更新中...</div>
          </div>
        </div>
        <!--
        <div class="tj-section-bgc">
            <div class="tj-section">
                <h2 style="margin-bottom: 60px">
                    <hr>
                    <span>合作体检中心超450家</span>
                    <hr>
                </h2>
                <ul class="tj-section-hoslist clearfix">
                </ul>
                <div class="hos-all"><a href="//www.mytijian.com/m/mt/hospital" id="tj-look" target="_blank">查看全部&gt;</a></div>
            </div>
        </div>
        -->
        <div class="tj-section">
            <div class="tj-section-tj">
                <h2 class="qd-section-hd"><span class="qd-section-hd-txt">合作申请</span></h2>
                <div class="apply-box" style="padding-top: 60px;">
                    <form action="index.php" method="post" name="form1" onsubmit="return check()">
                    <div class="apply-row">
                    <label>企业名称</label>
                    <input type="text" name="nickname" class="form-inp" placeholder="企业名称">
                    </div>
                    <div class="apply-row">
                    <label>联系人姓名</label>
                    <input name="content" rows="5" class="form-area" placeholder="联系人姓名">
                    </div>
                    <div class="apply-row">
                    <label>联系人电话</label>
                    <input name="content" rows="5" class="form-area" placeholder="联系人电话">
                    </div>
                    <div class="apply-submit">
                    <button type="submit" class="form-btn" >提交</button>
                    </div>
                </form>
                <!--
                    <div class="apply-row">
                        <label>企业名称</label>
                        <input type="text" id="qdCompany" maxlength="50">
                        <a class="errow" href="javascript:;" >输入文字过长</a>
                    </div>
                    <div class="apply-row">
                        <label>联系人姓名</label>
                        <input type="text" id="qdName" maxlength="50">
                        <a class="errow" href="javascript:;" >输入文字过长</a>
                    </div>
                    <div class="apply-row">
                        <label>联系人电话</label>
                        <input type="text" id="qdPhone" maxlength="50">
                        <a class="errow" href="javascript:;" >输入文字过长</a>
                    </div>

                    <div class="apply-submit">
                        <button id="applyQD" href="javascript:;">提交申请</button>
                    </div>
                -->
                </div>
            </div>
        </div>

        <div class="tj-section-contact">
            <div class="tj-section">
                <div class="contact-box clearfix">
                    <div class="contact-link">
                        <h3>友情链接</h3>
                        <ul class="clearfix">
                            <li><img src="templates/default/picture/zhifubao.png"></li>
                            <li><img src="templates/default/picture/weixin.png"></li>
                            <li><img src="templates/default/picture/weibo.png"></li>
                            <li><a href="/117Hospital/html/index.html"><img src="templates/default/picture/shizi.png"></a></li>
                        </ul>
                    </div>
                    <div class="contact-phone">
                        <h3>客服电话</h3>
                        <p><img src="templates/default/picture/phone.png"><span>400-6010-550</span></p>
                    </div>
                    <div class="contact-code">
                        <h3>扫码关注我们</h3>
                        <img src="templates/default/picture/code.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="tj-footer tj-section-bgc">
            Copyright © kangxinlianmeng.com 版权所有：北京牧航网路科技有限公司 京ICP备16004880号-1 客户服务热线：400-6010-550
        </div>

        <script src="templates/default/js/jquery.min.js"></script>
        <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
        <script src="templates/default/js/bootstrap.min.js"></script>
        <script src="templates/default/js/script.js"></script>
    </body>
</html>
