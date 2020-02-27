//引入express中间件
var express = require('express');
var app = express();
var cors = require('cors');

// 这里从环境变量读取配置，方便命令行启动
// PORT 服务端口
const { PORT = '8080' } = process.env;


app.use(express.json());


//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./api'));


// 设置端口
app.set('port', PORT);

// 静态页面
// 这里一般设置你的静态资源路径
app.use('/', express.static('./dist'));

//allow custom header and CORS
app.use(cors());

// 监听端口
app.listen(app.get('port'), () => {
  console.log(`server running @${app.get('port')}`);
});

module.exports = app;