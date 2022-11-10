//  处理请求参数 url模块
// const url = require('url');
//  读取文件 fs模块
const fs = require('fs');

// 业务逻辑处理
module.exports = {
    //  首页信息返回
    index(res) {
        // 获取get url参数
        // console.log(url.parse(req.url,true).query);
        fs.readFile('./index.html','utf-8',(error,data) => {
            //  返回html 文件不需要头部申明，html文件头部 <!DOCTYPE html> 自己已声明
            res.end(data);
        })
    },

    //  图片处理
    imgFile (res) {
        fs.readFile('./1.HTTP网络通信协议.png',(error,data) => {
            res.end(data);
        })
    },

    user(postData,res) {
        console.log('postData: ', postData);

    }
}