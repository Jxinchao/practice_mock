var path = require('path');
var config = {
  entry:{
    main:'./main'  // 配置的单入口
  },
  output:{
    path:path.join(__dirname,'./dist'),  // 用来存放打包后文件的输出目录 必填项
    publicPath:'/dist/',   // 指定资源文件引用的目录
    filename:'main.js'   // 指定输出文件的名称
    // 这里意为打包后的文件会存储为demo/dist/main.js
  }
};

module.exports = config;
// 这里的module.exports = config 相当于 export default config. 由于目前还么有安装支持ES6的编译插件，因此不能直接使用ES6的语法，不然会报错


// npm init  初始化项目
// npm install webpack --save-dev   // --save-dev 会作为开发依赖来安装webpack
// npm install webpack-dev-server --save-dev // 在开发环境中提供很多服务，比如启动一个服务器，热更新，接口代理


// "dev": "webpack-dev-server --host 172.172.172.1 --port 8888 --open --config webpack.config.js"   配置ip和端口

// webpack配置中最重要也是必选的两项是入口（entry） 和 出口 （output） 入口作用是告诉你webpack从哪里开始寻找依赖，并且编译，出口则用来配置编译后的文件存储位置和文件名

// webpack主要就是 入口（entry） 出口（output） 加载器（Loaders） 插件（plugins）
