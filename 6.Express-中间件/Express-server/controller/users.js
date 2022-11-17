const { UsersSchema } = require('../module/index')

const { createToken } = require('../util/jwt')

//  用户注册处理
exports.register = async(req,res) => {
    const usersSchema = new UsersSchema(req.body)
    try {
        await usersSchema.save()
        res.status(200).json({msg: '注册成功',code:200})
    }catch(err) {
        res.status(500).json({msg: err,code:500})
    }
}

//  用户登录处理
exports.login = async(req,res) => {
    //  客户端数据验证
    //  数据库查找
    let dbBack = await UsersSchema.findOne(req.body)
    
    if(dbBack) {
        dbBack = dbBack.toJSON()
        dbBack.token = await createToken(dbBack)
        res.status(201).json({msg: 'success',code:200,data: dbBack})
    }else {
        res.status(402).json({msg: '用户名或密码错误',code:402})
    }
    
}
exports.userInfo = (req,res) => {
    console.log('res.user: ', res.user);
    res.send('/userInfo')
}