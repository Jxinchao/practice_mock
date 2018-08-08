let express	=	require('express');
let mysql	=	require('mysql');
let route =express.Router();
let pool=mysql.createPool({
		host:'localhost',//ip地址
		user:'root',
		password:'142303',
		database:'nodedata',
		port:3307
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
	})
})
module.exports = route;
