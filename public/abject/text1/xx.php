﻿<?php require_once(dirname(__FILE__).'/include/config.inc.php'); 
//初始化参数检测正确性
$cid = empty($cid) ? 4 : intval($cid);
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="tjport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="康心联盟，医疗绿通，在线问诊，找医生" />
    <meta name="description" content="康心联盟致力于通过“互联网+医疗”的方式提高全民健康水平，解决老百姓“就医难”的核心难题。目前平台已接入北、上、广、深等全国近100个城市，2000家二甲以上公立医院，建立了线上专科问诊和线下大病绿通两大服务体系！" />
    <link rel="shortcut icon" href="">
    <title>康心联盟-中国领先的互联网医疗服务平台</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="templates/default/style/bootstrap.min.css">

    <link rel="stylesheet" href="templates/default/style/style.css">
    <link rel="stylesheet" type="text/css" href="templates/default/style/common.css">
    <link rel="stylesheet" type="text/css" href="templates/default/style/index.css">
    <script type="text/javascript" src="templates/default/js/jquery.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you tj the page via file:// -->
    <!--[if lt IE 9]>
    <script src="static/js/html5shiv.min.js"></script>
    <script src="static/js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
  <!-- Header S-->
  <div class="tj-container">
    <div class="tj-header clearfix">
        <a href="/?v=1" class="tj-logo pull-left">
            <div class="tj-bg-box bg-logo"></div>
        </a>
        <ul class="tj-nav pull-left">
            <li><a href="index.php">首页</a></li>
            <li><a href="channel.html">渠道合作</a></li>
            <li><a href="about.html" class="current">关于我们</a></li>
            <li><a href="xw.php">新闻中心</a></li>
        </ul>
      </div>
  </div>
  <!-- Header E-->
<div>
    <img src="templates/default/picture/about2.png" class="img-responsive">
</div>
    <div class="news-box">
        <div class="wrap m">
            <div class="plan-tit">
                康心资讯
            </div>
            <div class="plan-line m"></div>
            <div class="news-date">
                2019
            </div>
            <ul class="news-list">
                <?php
                /*
                    $sql = "SELECT title,linkurl,picurl,posttime,description FROM `#@__infolist` WHERE `classid`=4 AND `delstate`='' AND `checkinfo`=true ORDER BY orderid DESC";
                    $dopage->GetPage($sql,3);
                */  
                    $dopage->GetPage("SELECT * FROM `#@__infolist` WHERE (classid=$cid OR parentstr LIKE '%,$cid,%') AND delstate='' AND checkinfo=true ORDER BY orderid DESC",3);
                    
                    while($row = $dosql->GetArray())
                    {
                    if($row['linkurl']=='' and $cfg_isreurl!='Y') $gourl = 'list.php?cid='.$row['classid'].'&id='.$row['id'];
                    else if($cfg_isreurl=='Y') $gourl = 'list-'.$row['classid'].'-'.$row['id'].'-1.html';
                    else $gourl = $row['linkurl'];

                ?>
                <li>
                    <a href="<?php echo $gourl; ?>" style="color:<?php echo $row['colorval']; ?>;font-weight:<?php echo $row['boldval']; ?>;">
                        <div class="news-desc">
                            <div class="news-tit clearfix">
                                <div class="news-list-date fl">
                                    <?php ECHO date("m-d",$row['posttime']);?>
                                </div>
                                <div class="news-list-line fl"></div>
                                <div class="news-list-tit fl">
                                    <?php echo ReStrLen($row['title'],40);?>
                                </div>
                            </div>
                            <div class="news-desp clearfix">
                                <div class="news-d-ico fl">
                                    <img src="templates/default/images/news-ico.png">
                                    <div class="news-d-icos">
                                        <img src="templates/default/images/news-ico-h.png">
                                    </div>
                                </div>
                                <div class="news-d-desc">
                                    <?php echo ReStrLen($row['description'],250);?>
                                </div>
                            </div>
                        </div>
                        <div class="news-pic">
                            <img src="<?=$row['picurl'];?>">
                        </div>
                    </a>
                </li>
                <?php
                }
                ?>
            </ul>
            <div class="page">
                <ul class="clearfix">
                    <?php echo $dopage->GetList(); ?>
                </ul>
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