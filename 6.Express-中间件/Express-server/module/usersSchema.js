const mongoose = require('mongoose')
const baseTime = require('./base')
const md5 = require('../util/md5')

const users = new mongoose.Schema({
    username: {
        type: String,
        required: true,// 默认填写
    },
    password: {
        type: String,
        required: true,
        set: val => md5(val),
        select: false
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        default: null, // 可选：默认为null
    },
    ...baseTime

})
module.exports = users