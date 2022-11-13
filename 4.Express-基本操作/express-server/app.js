const express = require('express');
// 全局应用
const app = express();

const {getIndex, postIndex} = require('./db');

//  设置请求头headers 'content-type': 'application/x-www-form-urlencoded'
// app.use(express.urlencoded());

//  设置请求头headers 'content-type': 'application/json'
app.use(express.json());


app.get('/',async (req,res) => {

    try{
        const { users } = await getIndex();
        res.send(users);
    }catch(error) {
        res.status(500).json({error})
    }

});

app.post('/',async (req,res) => {
    
    let postData = req.body;

    if(!postData) {
        res.status(403).json({error: '缺少用户信息'})
    }

    let readDataJson = await getIndex();

    postData.id = readDataJson.users[readDataJson.users.length-1].id + 1
    
    readDataJson.users.push(postData);

    try{
        const writeData = await postIndex(readDataJson);
        if(!writeData) {
            res.status(200).json({
                msg: '成功',
                code: 200
            })
        }
    }catch(error) {
        res.status(500).json({error: '数据写入错误'})
    }
});

app.put('/:id',async (req,res) => {
    try {
        const putId = Number.parseInt(req.params.id);
        const putData = req.body;

        const readDataJson  = await getIndex();
        if(!readDataJson){
            res.status(403).json({error: "用户不存在"})
        }

        const restData = readDataJson.users.find( item => item.id === putId)
        restData.username = putData.username ? putData.username : restData.username;
        restData.age = putData.age ? putData.age : restData.age;
        
        readDataJson.users[putId] = restData;

        try{
            const writeData = await postIndex(readDataJson);
            if(!writeData) {
                res.status(200).json({
                    code: 200,
                    msg: "成功"
                })
            }
        }catch(error) {
            res.status(500).json({error})
        }
    }catch(error){
        res.status(500).json({error})
    }
    
})
app.listen(3000, () => {
    console.log('Run http://127.0.0.1:3000');
})