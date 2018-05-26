var express=require('express');
var mysql=require('mysql');
var route=express.Router();
var pool=mysql.createPool({    // 创建连接池
	host:'127.0.0.1',
	user:'root',
	password:'zhou',   
	database:'zhou',     // 数据库名称
	port:3306
})
route.post('/login',function(req,res){
	var uname=req.body['username'];
	var pwd=req.body['pwd'];
	
var selectSQL = 'select * from user1';
pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);
    conn.query(selectSQL,function(err,rows){
        if(err){ 
        	console.log(err)
        }else{
        	for(var i=0;i<rows.length;i++){
        	   if(uname==rows[i].username){
		            if(pwd==rows[i].password){
			           res.send({flag:1});
			           return;
		            }else{
			           res.send({flag:3});
			           return;
		            }
	            }else{
		            res.send({flag:2});
		            return;
	            }
        	}
        }
        conn.release();
    });
});
	
	
	
})
module.exports=route;
