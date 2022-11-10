//  导入 HTTP模块
const http = require('http');
//  创建服务器 or 获取到服务器的实例对象
const server = http.createServer();
const router = require('./router');

// 监听8080端口
server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})

//  监听客户端请求事件
// req：请求对象
// res：响应对象
server.on('request',(req,res) => {
    router(req,res);
})