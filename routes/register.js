let express	=	require('express');
let mysql	=	require('mysql');
let router =express.Router();
let pool=mysql.createPool({
		host:'localhost',//ip地址
		user:'root',
		password:'142303',
		database:'nodedata',
		port:3307
})

router.get('/register',function(requset,response){
  response.header("Access-Control-Allow-Origin","*");
  response.send('...')
  // let uname = requset.body['uname'];
  // let pwd = requset.body['pwd'];
  // let tel = requset.body['tel'];
  // getAllUsers(uname,function(err,results){
  //     console.log(results);
  //     if(results != null && results != ''){
  //         response.send({flag:2});  //用户名被占用
  //         return;
  //     }
  //     save(uname,pwd,tel,function(err,result){
  //         if(err){
  //             response.send({flag:3});
  //             return;
  //         }
  //         if(result.insertId > 0){
  //             response.send({flag:1})  //注册成功
  //         }else{
  //             response.send({flag:4})  //注册失败
  //         }
  //
  //     })
  // })

});
//获取信息列表：
function getAllUsers(uname,call){  //形参以函数的形式传递出去
    pool.getConnection(function(err,connection){  // 成功获取
        var getAllUsers_Sql = 'select * from user where uname=?';
        connection.query(getAllUsers_Sql,[uname],function(err,result){
            // console.log(result)
            connection.release();  //释放连接数
            call(err,result)
        })
    })
}
// 插入数据
function save(uname,pwd,img,callback){
    pool.getConnection(function(err,connection){  // 成功获取
        var insert_Sql = 'insert into user(uname,pwd,img) values(?,?,?)'; //id用0站位
        connection.query(insert_Sql,[uname,pwd,img],function(err,result){
            // console.log(result)
            connection.release();  //释放连接数
            callback(err,result)
        })
    })
}
// 封装的方法
function connectionSql(sql,callback){
  pool.getConnection(function(err,conns){
    conns.query(sql,function(err,result){
      conns.release();
      callback(err,result);
    })
  })
}

module.exports=router;//输出
