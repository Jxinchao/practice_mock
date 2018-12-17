var express = require('express');
var mysql = require('mysql');
var router = express.Router();


var pool = mysql.createPool({
    host:'120.79.168.209',   //IP地址
    user:'root',    //数据库登录名
    password:'123456',   //数据库密码
    database:'ogtmin',   //数据库名称
    port:3306     //端口号
    // host:'192.168.43.197',
    // user:'root',
    // password:'MBF5323ZH',
    // database:'test',
    // port:'3306'
})


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


// 注册
router.post('/login',function(requset,response){
    var uname = requset.body['uname'];
    var pwd = requset.body['pwd'];
    // pool.getConnection(function(err,connection){  // 成功获取
    //     var getAllUsers_Sql = 'select * from user where uname=?';
    //     connection.query(getAllUsers_Sql,[uname],function(err,result){
    //         connection.release();  //释放连接数
    //         console.log(result)

    //     })
    // })
    getAllUsers(uname,function(err,results){
        if(results != null && results != ''){
            response.send({flag:2});  //用户名被占用
            return;
        }
        save(uname,pwd,function(err,result){
            if(err){
                response.send({flag:3});
                return;
            }
            if(result.insertId > 0){
                response.send({flag:1})  //注册成功
            }else{
                response.send({flag:4})  //注册失败
            }

        })
    })

})
// 注册
function save(uname,pwd,callback){
    pool.getConnection(function(err,connection){  // 成功获取
        var insert_Sql = 'insert into user(uname,pwd) values(?,?)'; //id用0站位
        connection.query(insert_Sql,[uname,pwd],function(err,result){
            // console.log(result)
            connection.release();  //释放连接数
            callback(err,result)
        })
    })
}
// 登录
router.post('/log',function(req,res){
     // res.redirect('/mysql');  //重定向
    res.header("Access-Control-Allow-Origin", "*"); //可以让别人连接你的后台
    var name = req.body['uname'];
    var pwd = req.body['pwd'];
    console.log('into sql  login  ........');
    getUserByName(name,function(err,result){
        if(result.length==0){
            res.send({flag:2})  //用户名不存在
        }
        else if(result.length>0){
            console.log(result)
            if(result[0].pwd==pwd){
                req.session.u = name;  //设置session   uname是自定义的    name 是前台传过来的
                res.send({flag:1}) //登录成功
            }
            else if(result[0].pwd!=pwd){
                res.send({flag:3})  // 密码错误
            }
        }
        else{
            res.send({flag:4})  //异常
        }
    })

})
// 重定向跳转
// router.get('/log',function(req,res){

// })




// 登录函数
function getUserByName(uname,callback){
    pool.getConnection(function(err,connection){
        var getUserByName_sql = "select * from user where uname=?";
        connection.query(getUserByName_sql,[uname],function(err,result){
            if(err){
                console.log("getUserByName_sql  Error:"+ err.message);
                return;
            }
            connection.release(); //释放连接
            callback(err,result)
        })
    })
}

//  重定项 别人看你的数据的时候会跳转到404页面
router.get('/cdx',function(){
    res.redirect('/mysql.html');  //重定向
})

// 列表
router.get('/list', function (requset, response) {
    response.header("Access-Control-Allow-Origin","*"); //连接后台
    // var id = 2;
    // var uname = 'cc';
    // getAllUsers(id,uname,function(err,result){
    //     response.send(result)
    // })

    // if(requset.session.u !='' && requset.session.u != null){
        pool.getConnection(function(err,conn){
            //var sql = 'SELECT * from `he365_news_data`  where news_type_id = 3 limit 20;';
            //var sql = 'SELECT * from `he365_news_data`';
            var sql = 'SELECT now()';
            conn.query(sql,function(err,result){
                conn.release();
                console.log(result)
                response.send(result)
            })
        })
    // }else{
    //    response.send({flag:0})
    // }
})


// 详情
router.get('/detail', function (requset, response) {

    response.header("Access-Control-Allow-Origin","*"); //连接后台
    var datail = requset.query.id;

    pool.getConnection(function(err,conn){
        var sql = 'select * from user where id=?';
        conn.query(sql,[datail],function(err,result){
            conn.release();
            response.send(result)
            console.log(result)
        })
    })
})
// 更新页面

router.get('/updata',function(req,res){
    var bb = req.query.uname;
    var uid = req.query.id;
    pool.getConnection(function(err,conn){
        var aa = 'update user set uname=? where id=?';
        conn.query(aa,[bb,uid],function(err,result){
            console.log(result)
            conn.release();
            if(result.changedRows > 0){
                res.send({flag:1})
            }else{
                res.send({flag:2})
            }
           // res.send(result)
        })
    })

})

// 搜索
router.get('/search',function(req,res){
    var cc = req.query.id;
    console.log(cc)
    pool.getConnection(function(err,conn){
        var aa = 'select * from user where uname like "%" ? "%" or pwd like "%" ? "%"';
        conn.query(aa,[cc,cc],function(err,result){
            conn.release();
            console.log(result)
            if(result != null && result != ''){
                res.send(result)
            }else{
                res.send({flag:2})
            }

        })
    })

})

//分页
router.get('/page', function(req, res) {
    var pageNum = req.query.pageNum;
    //console.log('pageNum:'+pageNum);
    var total = 0;
    total=arr.length;
    pageSize=3;
    totalPage=Math.ceil(total/pageSize);
    var start=pageSize*(pageNum-1);
    var end = pageSize*pageNum;
    console.log(start+'|'+end);
    var results = arr.slice(start,end);
    var data = {total:total,pageSize:pageSize,totalPage:totalPage,list:results};
    res.send(data)
});
module.exports = router;
