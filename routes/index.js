var express = require('express');
var crypto = require('crypto');   // token 安装的包
var router = express.Router();

var token = "ogtmin1123"; //此处需要你自己修改！
/* GET home page. */
router.get('/', function(req, res, next) {
  /*  加密/校验流程如下： */
  //1. 将token、timestamp、nonce三个参数进行字典序排序
  var array = new Array(token,timestamp,nonce);
  array.sort();
  var str = array.toString().replace(/,/g,"");

  //2. 将三个参数字符串拼接成一个字符串进行sha1加密
  var sha1Code = crypto.createHash("sha1");
  var code = sha1Code.update(str,'utf-8').digest("hex");

  //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
  if(code===signature){
      res.send(echostr)
  }else{
      res.send("error");
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
