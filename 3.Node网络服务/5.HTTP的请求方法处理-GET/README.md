### HTTP的请求方法处理-GET

```
const http = require('http');
//  读取文件 fs模块
const fs = require('fs');
//  处理请求参数 url模块
const url = require('url');

const server = http.createServer();

server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})

server.on('request',(req,res) => {

    if(req.method === 'GET') {
        // 获取get url参数
        console.log(url.parse(req.url,true).query);
    }

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
