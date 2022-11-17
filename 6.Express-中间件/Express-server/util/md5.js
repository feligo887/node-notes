const crypto = require('crypto')

module.exports = (str) => crypto
.createHash('md5') // 创建一个hash 用md5加密
.update(`md5${str}`) // 要加密的 string
.digest('hex') //  选择加密算法