var express	=	require('express');
var mysql	=	require('mysql');
var route =express.Router();
var pool=mysql.createPool({
		host:'118.89.101.176',//ip地址
		user:'root',
		password:'root',
		database:'node',
		port:3306
})

function searchUser(sql,callback){
	pool.getConnection(function(err,conns){
			//console.log(conns+'>>>'+err)
			conns.query(sql,function(err,result){
			//console.log(result)
				//释放连接
             	 conns.release();
				callback(err,result)
			})

	})
}

route.post('/login',function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	var unames=req.body['username'];
	var pwds=req.body['password'];
	console.log(unames+'>>>'+pwds)
	searchUser('select * from login',function(err,result){
		console.log(result)
		for(var user in result){
			if(unames==result[user].uname&&pwds==result[user].pwd){
				req.session.username=unames; //设置session
				//console.log(userId)
				//res.redirect('html/homepage.html')   // 重定向
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
	// })
})
module.exports = route;
