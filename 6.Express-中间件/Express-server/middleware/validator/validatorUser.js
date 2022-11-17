//  用户信息注册验证
const { body } = require('express-validator')
const validate = require('./errorBack');
const { UsersSchema } = require('../../module')
exports.register = validate([
    body('username')
        .notEmpty().withMessage('用户名不能为空').bail()
        .isLength({min:5,max: 255}).withMessage('用户名长度不能小于5、大于255').bail()
        .custom( async val => {
            const usernamelVal = await UsersSchema.findOne({username: val})
            if(usernamelVal){
                return Promise.reject('用户名已存在')
            }
        }).bail(),
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('请输入正确的邮箱').bail()
        .custom( async val => {
            const emailVal = await UsersSchema.findOne({email: val})
            if(emailVal){
                return Promise.reject('邮箱已存在')
            }
        }).bail(),
    body('phone')
        .notEmpty().withMessage('手机号码不能为空').bail()
        .isMobilePhone().withMessage('请输入正确的手机号码').bail()
        .custom( async val => {
            const phoneVal = await UsersSchema.findOne({phone: val})
            if(phoneVal){
                return Promise.reject('手机号码已存在')
            }
        }).bail(),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail(),
])

exports.login = validate([
    body('username')
        .notEmpty().withMessage('用户名不能为空').bail()
        .isLength({min:5,max: 255}).withMessage('用户名长度不能小于5、大于255').bail()
        .custom( async val => {
            const errors = await UsersSchema.findOne({username: val})
            if(!errors) {
                return Promise.reject('该用户未注册')
            }
        }),
    body('password')
        .notEmpty().withMessage('密码不能为空'),
])

