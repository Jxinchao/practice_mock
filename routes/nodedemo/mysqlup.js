var express = require('express');
var mysql = require('mysql');
var fs = require('fs');
// var formidable = require('formidable');
var router = express.Router();


var pool = mysql.createPool({
    host:'127.0.0.1',   //IP地址
    user:'root',    //数据库登录名
    password:'123456',   //数据库密码
    database:'node',   //数据库名称
    port:3306     //端口号
    // host:'192.168.43.197',
    // user:'root',
    // password:'MBF5323ZH',
    // database:'test',
    // port:'3306'
})


//上传
router.post('/up',function(req,res){
	console.log('into up......')
	var form = new formidable.IncomingForm();   //创建IncomingForm对象
	form.uploadDir = 'public/upload/temp/';  //设置上传文件路径

	// 如果form.uploadDir不赋值，他的默认位置是c:user/用户名/Appdata
	// form.encoding = 'utf-8'  //设定文件的编码

	form.parse(req,function(err,fields,files){
		for(var i in files){
			var file = files[i];
			var fName = (new Date()).getTime();  //给图片设置的名称 时间戳
			switch (file.type){
				case 'image/jpeg':
					fName = fName + '.jpeg';
					break;
				case 'image/png':
					fName = fName + '.png';
					break;
			}
			var newPath = '../public/upload/'+fName;
			// fs 重新命名
			fs.renameSync(file.path,newPath);  //重命名
			res.send(fName)
		}
	})
})
//注册
router.post('/login',function(requset,response){
    var uname = requset.body['uname'];
    var pwd = requset.body['pwd'];
    var img = requset.body['tx'];
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
        save(uname,pwd,img,function(err,result){
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
//获取图片
router.get('/li',function(req,res){
	pool.getConnection(function(err,conn){
        var sql = 'select * from user_name';
        conn.query(sql,function(err,result){
            console.log('cc：'+result)
            res.send(result)
        })
    })
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

// 分页
router.get('/page',function(req,res){
    var pageNum = req.query.pageNum;
    getPageTotal(function(err,total){
        console.log(total)
        if(err){
            console.log(err);
            return;
        }else if(total){
            getResults(pageNum,function(err,result,pageSize){
                var totalPage = Math.ceil(total/pageSize),
                    data = {total:total,pageSize:pageSize,totalPage:totalPage,list:result};
                res.send(data)
            })
        }else{
            res.send('error...')
        }
    })
})

// 总条数
function getPageTotal(call){
    pool.getConnection(function(err,conn){
        // var getTotal = 'select * from user';
        var getTotal = 'select count(*) from user'
        conn.query(getTotal,function(err,result){
            if(err){
                console.log('total:'+err.message)
                return;
            }
            conn.release();
            // total = result.length;
            total = result[0]['count(*)']
            call(err,total)
        })
    })
}

// 显示每页总条数
function getResults(pageNum,call){
    var pageSize = 2,
        startPage = pageNum * (pageSize-1);
        pool.getConnection(function(err,connection){
            var total_sql = 'select * from user limit ?,?';
            connection.query(total_sql,[startPage,pageSize],function(err,result){
                if(err){
                    console.log('error:'+err.message);
                    return;
                }
                connection.release();
                call(err,result,pageSize)
            })
        })
};




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







module.exports = router;
