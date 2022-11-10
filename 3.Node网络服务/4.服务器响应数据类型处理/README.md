### 服务器响应数据类型处理

```
const http = require('http');
//  读取文件 fs模块
const fs = require('fs');
const server = http.createServer();

server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})

//  监听客户端请求事件
// req：请求对象
// res：响应对象
server.on('request',(req,res) => {

    // 设置响应式头:纯文本类型
    // res.setHeader('Content-type','text/plain;charset=utf-8');
    // 设置响应式头:html超文本类型
    // res.setHeader('Content-type','text/html;charset=utf-8');

    //  响应处理结果并断开链接
    // res.write('您好');
    // res.write('<p>你好</p>');
    // res.end();
    if(req.url === '/') {
        fs.readFile('./index.html','utf-8',(error,data) => {
            //  返回html 文件不需要头部申明，html文件头部 <!DOCTYPE html> 自己已声明
            res.end(data);
        })
    }else {
        fs.readFile('./1.HTTP网络通信协议.png',(error,data) => {
            res.end(data);
        })
    }


})
```
