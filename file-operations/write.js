// 文件覆盖写入
const fs = require('fs');

const textdata = '读取文件操作 ';

fs.writeFile('./test.txt',textdata,(error) => {
    !error &&  console.log('文件操作成功');
})