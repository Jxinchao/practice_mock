<div class="foot">
        <div class="wrap m clearfix">
            <div class="foot-l fl">
                <div class="tel">
                    <div class="ico-tel">
                        <img src="templates/default/images/tel.png">
                    </div>
                    <div class="tel-desc">
                        <div class="tel-tit">
                            如有疑问，欢迎致电
                        </div>
                        <div class="tel-number">
                            400-6010-550
                        </div>
                    </div>
                </div>
                <div class="link">
                    友情链接：
                    <?php
                    $i=1;
                    $dosql->Execute("SELECT webname,linkurl FROM `#@__weblink` WHERE `classid`=1 AND `checkinfo`=true ORDER BY orderid asc LIMIT 0,15");
                    while($row = $dosql->GetArray())
                    {
                        $i = $i+1;
                        if($i==2){
                    ?> 
                        <a href="<?=$row['linkurl'];?>"  rel="nofollow"><?=$row['webname'];?></a>
                    <?php
                        }else{
                        ?>
                       | <a href="<?=$row['linkurl'];?>"  rel="nofollow"><?=$row['webname'];?></a> 
                        <?php
                    }
                    }
                    ?>
                </div>
            </div>
            <div class="foot-r fr">
                <form action="index.php" method="post" name="form1" onsubmit="return check()">
                    <input type="text" name="nickname" class="form-inp" placeholder="姓名">
                    <textarea name="content" rows="5" class="form-area" placeholder="留言"></textarea>
                    <button type="submit" class="form-btn">提交</button>
                </form>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="wrap m">
            Copyright © KangXinLianMeng. All Rights Reserved.
        </div>
    </div>
</body>
<script type="text/javascript">
    $(function(){
        $(".news-list li").mouseover(function(){
            $(this).find(".news-d-icos").show();
        })
        $(".news-list li").mouseleave(function(){
            $(this).find(".news-d-icos").hide();
        })
    })
        $(function(){
        $(".plan-pic").mouseover(function(){
            $(this).find(".plan-pic-code").fadeIn();
        })
        $(".plan-pic").mouseleave(function(){
            $(this).find(".plan-pic-code").fadeOut();
        })
    })
</script>
<script type="text/javascript">
  function check() {
    if(document.form1.nickname.value=="") {
      alert('您的姓名不能为空！');
      document.form1.nickname.focus();
      return false;
    } 
    if(document.form1.content.value=='') {
      alert('请填写您的留言内容！');
      document.form1.content.focus();
      return false;
    }
  }
</script>
</html>
