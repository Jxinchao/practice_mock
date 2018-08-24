var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let indexRouter = require('./routes/index');
let logins = require('./routes/login'); // 登录
let register = require('./routes/register'); // 注册
let append = require('./routes/append');  // 数据
let usersRouter = require('./routes/users');

let mysqlup = require('./routes/nodedemo/mysqlup');  // 上传头像

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list',append);   // 数据列表
app.use('/login',logins);   // 登录
app.use('/register',register);   // 注册
app.use('/mysqlup',mysqlup);   // 注册

// app.get('/',function(req,res){
//   res.send('hello')
// });
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(8088, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = app;
