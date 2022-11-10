### Node 核心模块 HTTP
1. 创建HTTP服务器
2. 服务器接受请求并处理
3. 响应处理结果并断开链接

```
//  导入 HTTP 模块
const http = require('http');

//  1.创建服务器 or 获取到服务器的实例对象
const server = http.createServer();

// 监听8080端口
server.listen(8080,() => {
    console.log('http://127.0.0.1:8080');
})

//  2.监听客户端请求事件
server.on('request',(req,res) => {
    
    //  3.响应处理结果并断开链接
    console.log('request: ');
    res.write('request');
    res.end();
})
```
