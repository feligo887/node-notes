// 追加内容
const fs = require('fs');

const textNewData = '追加内容';

fs.readFile('./test.txt','utf8',(error,success) => {
    if(error) return;

    const data = success + textNewData;

    writeData(data);
})

function writeData(data) {
    fs.writeFile('./test.txt',data,(error) => {
        !error &&  console.log('文件操作成功');
    });
}