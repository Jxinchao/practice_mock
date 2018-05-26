var express = require('express');  //引入模块
var router = express.Router();   //获取对象 

// router.get('/login',function(requset,response){  //1 请求参数 2.响应回调函数
// 	console.log('hello,world')
// 	//response.send('login success...')
// 	response.send([{name:'超超'},{name:'Jane'}])   //send 发送
// })
var item = []; 
router.post('/dl',function(req,res){
	var uname = req.body['username'];   //body 对数据的解析
	var pass = req.body['password'];

	for(var i =0;i<item.length;i++){
		if(uname == item[i].name){
			if(pass == item[i].pwd){
				res.send({flag:1})  //成功情况
			}else{
				res.send({flag:3})	//密码错误
			}
		}else if(uname != item[i].name){
			if(i == (item.length)-1){   //因为是从0开始 如果输入的数组的最后一个或中间的他一看第一个不等于就发送请求，    减一是为了循环到最后一条在执行的条件
				res.send({flag:2})
			}
		}else {
			res.send({flag: 4});
		}
	}
})
router.post('/regist',function(require,res){
	var Jname = require.body['username'];
	var Jpwd = require.body['password'];
	var Jsex = require.body['sex'];
	var Jtel = require.body['tel'];
	var Jhobby = require.body['hobby'];
	var Jeml = require.body['eml'];
	var Jskill = require.body['skill'];
	console.log(Jname+ Jpwd+Jsex + Jtel + Jhobby + Jeml + Jskill)
	// if(!item.length) {
	// 	if(Jname && Jpwd && Jsex && Jtel && Jhobby && Jeml && Jskill) {
	// 		res.send({flag:1})
	// 		item.push({
	// 			name: Jname,
	// 			pwd: Jpwd,
	// 			tel: Jtel,
	// 			sex: Jsex,
	// 			hoddy: Jhobby,
	// 			skill: Jskill,
	// 			eml:Jeml
	// 		})
	// 	}else{
	// 		res.send({flag:3})
	// 	}
	// }else{
	// 	for(var i = 0; i < item.length; i++) {
	// 		if(Jname && Jpwd && Jsex && Jtel && Jhobby && Jeml && Jskill) {
	// 			if(Jname == item[i].name) {
	// 				res.send({flag: 2})
	// 			} else if(Jname != item[i].name1) {
	// 				if(i == item.length - 1) {
	// 					res.send({flag:1})
	// 					item.push({
	// 						name: Jname,
	// 						pwd: Jpwd,
	// 						tel: Jtel,
	// 						sex: Jsex,
	// 						hoddy: Jhobby,
	// 						skill: Jskill,
	// 						eml:Jeml
	// 					})
	// 				}
	// 			}
	// 		}else {
	// 			res.send({flag: 3})
	// 		}
	// 	}
	// }
  //  for(var i =0;i<item.length;i++){
  //  		if(Jname == item[i].name){
		// 	res.send({flag:2})
		// }else if(Jname && Jpwd && Jsex && Jtel && Jhobby && Jeml && Jskill){
		// 	res.send({flag:1})
		// }else{
		// 	if(i == (item.length)-1){
		// 		res.send({flag:3})
		// 	}
		// }
  //  } 
	
  	for(var i=0;i<item.length;i++){
  		if(Jname == item[i].name){
  			res.send({flag:2});
  			return;
  		}
  	}

  	if(Jname && Jpwd && Jsex && Jtel && Jhobby && Jeml && Jskill){
  		item.push({
			name: Jname,
			pwd: Jpwd,
			tel: Jtel,
			sex: Jsex,
			hoddy: Jhobby,
			skill: Jskill,
			eml:Jeml
		});
		res.send({flag:1});
  	}else{
  		res.send({flag:3});
  	}

	// console.log(item);
  	

})
module.exports = router;