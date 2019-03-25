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
</head>

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
            <?php require_once('right.php'); ?>
    <div class="plan-ban">
        <img src="templates/default/images/plan-ban.png">
    </div>
    <div class="plan-text wrap m">
        康心联盟互助计划不是保险，会员预缴的互助金不是保险费，牧航网络科技（北京）有限公司和康心联盟平台也不是商业保险公司。<br>
        加入互助计划是单向的捐赠或捐助行为，不能预期获得确定的风险保障。<br>
        牧航网络科技（北京）有限公司和康心联盟平台不对互助申请人获得的互助金金额做出保证和承诺，互助申请人最终获得的互助金金额以会员实际捐赠金额为准。
    </div>
    <div class="plan-box wrap m">
        <div class="plan-list clearfix">
            <div class="plan-list-pic fl">
                <img src="templates/default/images/plan-1.png">
            </div>
            <div class="plan-list-desc fr">
                <div class="p-list-desc-t">
                    宝宝互助计划
                </div>
                <div class="p-list-d">
                    白血病、单耳失聪、视力严重受损、非危及生命的（极早期的）恶性病变、角膜移植、脑炎或脑膜炎、癌症等192种大病
                </div>
                <div class="p-list-a">
                    <a href="#">MORE</a>
                </div>
            </div>
        </div>
        <div class="plan-list clearfix">
            <div class="plan-list-pic fl">
                <img src="templates/default/images/plan-2.png">
            </div>
            <div class="plan-list-desc fr">
                <div class="p-list-desc-t">
                    中青年互助计划
                </div>
                <div class="p-list-d">
                    轻微脑中风、早期肝硬化、中度溃疡性结肠炎、听力严重受损、微创颅脑手术、
                    严重的骨质疏松、恶性肿瘤
                    癌症等192种大病
                </div>
                <div class="p-list-a">
                    <a href="#">MORE</a>
                </div>
            </div>
        </div>
        <div class="plan-list clearfix">
            <div class="plan-list-pic fl">
                <img src="templates/default/images/plan-3.png">
            </div>
            <div class="plan-list-desc fr">
                <div class="p-list-desc-t">
                    银丝互助计划
                </div>
                <div class="p-list-d">
                    早期肝硬化、慢性肝功能衰竭、中度严重系统性红斑狼疮、听力严重受损、中度严重帕金森病、
                    脑垂体瘤、脑囊肿、脑动脉瘤及脑血管瘤、中度瘫痪、癌症等192种大病
                </div>
                <div class="p-list-a">
                    <a href="#">MORE</a>
                </div>
            </div>
        </div>
        <div class="plan-list clearfix">
            <div class="plan-list-pic fl">
                <img src="templates/default/images/plan-4.png">
            </div>
            <div class="plan-list-desc fr">
                <div class="p-list-desc-t">
                    综合意外互助计划
                </div>
                <div class="p-list-d">
                    意外身故、意外伤残
                </div>
                <div class="p-list-a">
                    <a href="#">MORE</a>
                </div>
            </div>
        </div>
    </div>
    <div class="foot-code">
        <div class="foot-c m clearfix">
            <div class="foot-code-pic fl">
                <img src="templates/default/images/code.png">
            </div>
            <div class="foot-code-desc fr">
                <div class="f-code-d-t">
                    扫码·关注<span>【康心联盟】</span>
                </div>
                <div class="f-code-d-ts">
                    点击“加入互助”，开启互助之门
                </div>
            </div>
        </div>
    </div>
    <?php require_once('footer.php'); ?>