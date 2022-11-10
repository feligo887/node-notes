### HTTP的请求方法处理-POST

```
//  导入 HTTP模块
const http = require('http');
//  读取文件 fs模块
const fs = require('fs');
//  处理请求参数 url模块
const url = require('url');

const querystring = require('querystring');

//  创建服务器 or 获取到服务器的实例对象
const server = http.createServer();

// 监听8080端口
server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})

//  监听客户端请求事件
// req：请求对象
// res：响应对象
server.on('request',(req,res) => {
    //  请求头数据处理
    if(req.method === 'GET') {
        // 获取get url参数
        // console.log(url.parse(req.url,true).query);
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

    //  请求体数据处理
    }else if(req.method === 'POST') {

        let postData = '';

        // post 数据获取
        //  利用Net模块Event监听data传输结束
        req.on('data',(d) => {
            postData += d;

        })

        //  利用Net模块Event监听data传输结束
        req.on('end',() => {
            console.log('querystring.parse(postData): ', querystring.parse(postData));
        })
        res.end();
        
    }

})
```
