var express=require('express');
var mysql=require('mysql');
var router=express.Router();
var pool=mysql.createPool({
		host:'118.89.101.176',//ip地址
		user:'root',
		password:'root',
		database:'crmdata',
		port:3306
})

router.post('/login',function(req,res){
	res.header("Access-Control-Allow-Origin","*");
//	res.setHeader("Access-Control-Allow-Credentials",true);
	var unames=req.body['uname'];
	var pwds=req.body['pwd'];
	console.log(unames+'>>>'+pwds)
	searchUser('select * from userdata',function(err,result){

		for(var user in result){

			if(unames==result[user].uname&&pwds==result[user].pwd){
				req.session.username=unames; //设置session
				//console.log(userId)
			//	res.redirect('html/homepage.html')
				res.send({flag:1,id:result[user].id})
				return;


			}else if(unames==result[user].uname&&pwds!=result[user].pwd){
				res.send({flag:3})
				return;
			}else{
				if(user==(result.length-1)){
					res.send({flag:2})
					return;
				}
			}
		}
	})
	//res.header("Access-Control-Allow-Origin","*");

})
