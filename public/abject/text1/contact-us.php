<?php require_once(dirname(__FILE__).'/include/config.inc.php'); ?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><?=$cfg_webname;?></title>
    <meta name="keywords" content="<?=$cfg_keyword;?>">
    <meta name="description" content="<?=$cfg_description;?>">
    <link rel="stylesheet" type="text/css" href="templates/default/style/common.css">
    <link rel="stylesheet" type="text/css" href="templates/default/style/index.css">
    <script type="text/javascript" src="templates/default/js/jquery.min.js"></script>
    <script type="text/javascript" src="templates/default/js/jquery.SuperSlide.2.1.2.js"></script>
    <script type="text/javascript" src="templates/default/js/common.js"></script>
</head>
        <?php require_once('right.php'); ?>
<body>
    <div class="top">
        <div class="wrap m clearfix">
            <div class="logo fl">
                <a href="index.php">
                    <img src="templates/default/images/logo.png">
                </a>
            </div>
            <div class="nav fr">
                <ul class="clearfix">
                    <li class="active">
                        <a href="http://www.kangxinlianmeng.com/index.php">首页</a>
                    </li>
                    <li>
                        <a href="http://www.kangxinlianmeng.com/plan.php">互助计划</a>
                    </li>
                    <li>
                        <a href="http://www.kangxinlianmeng.com/news.php">新闻中心</a>
                    </li>
                    <li>
                        <a href="http://www.kangxinlianmeng.com/contact-us.php">联系我们</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="banner" id="Js_Banner">
        <div class="s-bd">
            <div class="swrap">
                <?php
                $dosql->Execute("SELECT title,picurl FROM `#@__admanage` WHERE classid=1 AND checkinfo=true ORDER BY orderid asc LIMIT 0,5");
                while($row = $dosql->GetArray())
                {
                ?> 
                <div class="item">
                    <a href="#">
                        <img src="<?=$row['picurl'];?>">
                    </a>
                </div>
                <?php
                }
                ?>
            </div>
            <div class="hd">
                <ul>
                    <?php
                    $dosql->Execute("SELECT title,picurl FROM `#@__admanage` WHERE classid=1 AND checkinfo=true ORDER BY orderid asc LIMIT 0,5");
                    while($row = $dosql->GetArray())
                    {
                    ?> 
                    <li></li>
                    <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
    <div class="contact-con">
        <div class="contact-desc wrap m">
            <div class="plan-tit">
                联系我们
            </div>
            <div class="plan-line m"></div>
            <div class="contact-box m clearfix">
                <div class="contact-l fl">
                    <div class="contact-b">
                        <div class="contactus-tit">
                            牧航网络科技（北京）有限公司
                        </div>
                        <div class="contactus-desc">
                            <p>地址：北京市朝阳区高碑店礼安门55号楼107室</p>
                            <p>邮箱：muhang@muhang.net</p>
                            <p>邮编：</p>
                        </div>
                    </div>
                    <div class="contact-bs clearfix">
                        <div class="contact-bs-code fl">
                            <img src="templates/default/images/code.png">
                        </div>
                        <div class="contact-bs-d fl">
                            安全可靠的网络平台<br>
                            一流的技术服务团队<br>
                            公正透明的操作流程
                        </div>
                    </div>
                </div>
                <div class="contact-r fr">
                    <div class="contact-b">
                        <div class="contactus-tit">
                            客服支持
                        </div>
                        <div class="contactus-desc">
                            <p>客服邮箱：service@muhang.com</p>
                            <p>客服电话：400-6010-550</p>
                            <p>工作时间：周一至周五9:00—18:00（国定节假日除外）</p>
                        </div>
                    </div>
                    <div class="contact-b">
                        <div class="contactus-tit">
                            商务合作
                        </div>
                        <div class="contactus-desc">
                            <p>商务合作：service@muhang.com</p>
                            <p>客服电话：400-6010-550</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once('footer.php'); ?>