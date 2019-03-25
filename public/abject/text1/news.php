<?php require_once(dirname(__FILE__).'/include/config.inc.php'); 
//初始化参数检测正确性
$cid = empty($cid) ? 4 : intval($cid);
?>
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
        <?php require_once('right.php'); ?>
<body>
    <div class="top">
        <div class="wrap m clearfix">
            <div class="logo fl">
                <a href="index.html">
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
    <div class="plan-ban">
        <img src="templates/default/images/plan-ban.png">
    </div>
    <div class="news-box">
        <div class="wrap m">
            <div class="plan-tit">
                康心资讯
            </div>
            <div class="plan-line m"></div>
            <div class="news-date">
                2018
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