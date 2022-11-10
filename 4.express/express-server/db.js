const fs = require('fs');

// 可以使用async await
const {promisify} = require('util');
const readFile =  promisify(fs.readFile);
const writeFile =  promisify(fs.writeFile);

exports.getIndex = async () => {
    const data = await readFile('./db.json','utf-8');
    return JSON.parse(data);
}

exports.postIndex = async (data) => {
    const stringData = JSON.stringify(data);
    return await writeFile('./db.json',stringData);
}