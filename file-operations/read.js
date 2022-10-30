//  读取文件
const fs = require('fs');

fs.readFile('./test.txt','utf8', (error,success) => {
    console.log('success: ', success);
})