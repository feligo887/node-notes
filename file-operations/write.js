// 文件覆盖写入
const fs = require('fs');

const textdata = '读取文件操作/<br>';

fs.writeFile('./test.txt',textdata,(error) => {
    console.log('error: ', error);

})