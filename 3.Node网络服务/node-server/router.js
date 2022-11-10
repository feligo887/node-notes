const querystring = require('querystring');
const controller = require('./controller');

//  请求路径，请求方法
module.exports = (req,res) => {

    // 设置响应式头:纯文本类型
    // res.setHeader('Content-type','text/plain;charset=utf-8');
    // 设置响应式头:html超文本类型
    // res.setHeader('Content-type','text/html;charset=utf-8');

    //  响应处理结果并断开链接
    // res.write('您好');
    // res.write('<p>你好</p>');
    // res.end();

    //  请求头数据处理
    if(req.method === 'GET') {
        if(req.url === '/') {
            controller.index(res);
        }else {
            controller.imgFile(res);
        }


    //  请求体数据处理
    }else if(req.method === 'POST') {

        let postData = '';

        // post 数据获取
        //  利用Net模块Event监听data传输
        req.on('data',(d) => {
            postData += d;

        })

        //  利用Net模块Event监听data传输结束
        req.on('end',() => {
            controller.user(querystring.parse(postData),res);
        })
        res.end();
        
    }
}