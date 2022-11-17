// https://github.com/auth0/node-jsonwebtoken
const jwt = require('jsonwebtoken')
const { promisify } =  require('util')

const { uuid } = require('../config/config.default')
const jwtSign = promisify(jwt.sign)
const jwtVerify = promisify(jwt.verify)

//  创建token
exports.createToken = async userInfo => {
    return await jwtSign(
        { userInfo },
        uuid,
        {expiresIn: 60 * 60 * 24} // token有效时间
        );
}

/**
 * 验证token
 * 因为要在很多地方验证，并嵌套业务逻辑使用。所以封装成中间件的形式
 * **/  

exports.verifyToken = async (req, res, next) => {
    let token = req?.headers?.authorization ?? null
    token = token?token.split("Bearer ") [1]:token
    if(token) {
        try {
            const user =  await jwtVerify(token,uuid)

            //  把获取到的数据放入res，可以用res.userinfo 直接获取使用
            res.user = user

            next()
        }catch(error){
            res.status(402).json({msg:'无效的Token',code: 402})
        }
    }else {
        res.status(402).json({msg:'请传入Token',code: 402})
    }
}
