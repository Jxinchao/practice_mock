<?php require_once(dirname(__FILE__).'/include/config.inc.php'); 
//初始化参数检测正确性
$cid = empty($cid) ? 4 : intval($cid);
$id  = empty($id)  ? 0 : intval($id);
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><?=$cfg_webname;?></title>
    <meta name="keywords" content="<?=$cfg_keyword;?>">
<meta name="description" content="<?=$cfg_description;?>">
        <link rel="stylesheet" href="templates/default/style/bootstrap.min.css">

    <link rel="stylesheet" href="templates/default/style/style.css">
    <link rel="stylesheet" type="text/css" href="templates/default/style/common.css">
    <link rel="stylesheet" type="text/css" href="templates/default/style/index.css">
    <script type="text/javascript" src="templates/default/js/jquery.min.js"></script>
</head>
     
<body>
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
    <img src="templates/default/picture/about.png" class="img-responsive">
</div>
        <?php
        $row = $dosql->GetOne("SELECT * FROM `#@__infolist` WHERE id=$id");
    ?>

    <div class="plan-text wrap m">
                    <div class="p-list-desc-t">
                    <?php echo $row['title']; ?>
                </div>
                   <?php

            //检测文档正确性
            
            if(is_array($row))
            {
                //增加一次点击量
                $dosql->ExecNoneQuery("UPDATE `#@__infolist` SET hits=hits+1 WHERE id=$id");
            ?>
            <!-- 标题区域开始 -->
            <h1 class="title"></h1>
            <div class="info"><small>更新时间：</small><?php echo GetDateTime($row['posttime']); ?>&nbsp;&nbsp;<small>点击次数：</small><?php echo $row['hits']; ?>次</div>
            <!-- 标题区域结束 -->
            <!-- 摘要区域开始 -->
            <?php
            //判断是否显示描述
            if(!empty($row['description'])) echo '<div class="desc">'.$row['description'].'</div>';
            ?>
            <!-- 摘要区域结束 -->
            <!-- 组图区域开始-->
            <?php
            //判断显示缩略图或组图
            if(!empty($row['picarr']))
            {
                $picarr = unserialize($row['picarr']);
            ?>
            <div class="picarr">
                <div class="picture">
                    <?php
                    foreach($picarr as $k)
                    {
                        $v = explode(',', $k);
                    ?>
                    <a href="<?php echo $v[0]; ?>" class="lightbox" alt="<?php echo $v[1]; ?>"><img src="<?php echo $v[0]; ?>" /></a>
                    <?php
                    }
                    ?>
                </div>
                <ul class="preview">
                    <?php
                    foreach($picarr as $k)
                    {
                        $v = explode(',', $k);
                    ?>
                    <li><a href="javascript:void(0);"><img src="<?php echo $v[0]; ?>" /></a></li>
                    <?php
                    }
                    ?>
                    <div class="cl"></div>
                </ul>
                <div class="cl"></div>
            </div>
            <?php
            }
            ?>
            <!-- 组图区域结束 -->
            <!-- 内容区域开始 -->
            <div id="textarea">
                <?php
                if($row['content'] != '')
                    echo GetContPage($row['content']);
                else
                    echo '网站资料更新中...';
                ?>
            </div>
            <div class="author"><?php echo $row['source']; ?> (编辑：<?php echo $row['author']; ?>)</div>
            <!-- 内容区域结束 -->
            <!-- 相关文章开始 -->
            <div class="preNext">
                <div class="line"><strong></strong></div>
                <ul class="text">
                <?php

                //获取上一篇信息
                $r = $dosql->GetOne("SELECT * FROM `#@__infolist` WHERE classid=".$row['classid']." AND orderid<".$row['orderid']." AND delstate='' AND checkinfo=true ORDER BY orderid DESC");
                if($r < 1)
                {
                    echo '<li>上一篇：已经没有了</li>';
                }
                else
                {
                    if($cfg_isreurl != 'Y')
                        $gourl = 'list.php?cid='.$r['classid'].'&id='.$r['id'];
                    else
                        $gourl = 'list-'.$r['classid'].'-'.$r['id'].'-1.html';

                    echo '<li>上一篇：<a href="'.$gourl.'">'.$r['title'].'</a></li>';
                }
                
                //获取下一篇信息
                $r = $dosql->GetOne("SELECT * FROM `#@__infolist` WHERE classid=".$row['classid']." AND orderid>".$row['orderid']." AND delstate='' AND checkinfo=true ORDER BY orderid ASC");
                if($r < 1)
                {
                    echo '<li>下一篇：已经没有了</li>';
                }
                else
                {
                    if($cfg_isreurl != 'Y')
                        $gourl = 'list.php?cid='.$r['classid'].'&id='.$r['id'];
                    else
                        $gourl = 'list-'.$r['classid'].'-'.$r['id'].'-1.html';

                    echo '<li>下一篇：<a href="'.$gourl.'">'.$r['title'].'</a></li>';
                }
                ?>
                </ul>


                <input type="hidden" name="aid" id="aid" value="<?php echo $id; ?>" />
                <input type="hidden" name="molds" id="molds" value="1" />
            </div>
            <!-- 相关文章结束 -->
            <?php
            if($cfg_comment == 'Y')
            {
            ?>

            <?php
            }
            }
            ?>
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
                    <li><img src="templates/default/picture/shizi.png"></li>
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
    Copyright © kangxinlianmeng.com 版权所有：北京京晋坊科技有限公司 京ICP备16004880号-1 客户服务热线：400-6010-550
</div>
