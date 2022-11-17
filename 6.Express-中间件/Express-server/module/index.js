const mongoose = require('mongoose')

const { mongopath } = require('../config/config.default')

const main = async () => await mongoose.connect(mongopath)
main().then( () => console.log('mongo链接')).catch( err => console.log('mongo链接失败: ', err))


module.exports = {
    //  mongoose.model('Users',require('./users'))
    //  在express-video 数据库中创建一个 users 的集合
    //  并导出 UsersSchema
    UsersSchema: mongoose.model('Users',require('./usersSchema'))
}