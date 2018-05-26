var express=require('express');//引用模块
var router=express.Router();//对象
var json=[
     {name:"aaa",pass:"123"},
     {name:"bbb",pass:"456"},
     {name:"ccc",pass:"789"}
]
router.get('/deng',function(request,response) {
	console.log('denglu......');
	//response.send('lalalalaaala');
	//response.send({name:"wangzuo"});
	//response.send([{name:"wangzuo"},{name:"jinguanran"}]);
});
router.post('/den',function(request,response){
    var uname=request.body['username'];
    var pwd=request.body['password'];
    for(var i=0;i<json.length;i++){
      if(uname==json[i].name){
          if(pwd==json[i].pass){
            response.send({flag:1});  
          }
          else if(pwd!=json[i].pass){
            response.send({flag:2}); 
          }
      }
      else if(uname!=json[i].name){
        if(i==json.length-1){
          response.send({flag:3});
        }
      }
      else{
        response.send({flag:4});
      }
    }

})
module.exports=router;//输出