const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')

const { userInfo, register, login } = require('../controller/users')
const validator = require('../middleware/validator/validatorUser')
const { verifyToken } = require('../util/jwt')

router
.post('/register',validator.register,register)
.post('/login',validator.login,login)
.get('/user',verifyToken,userInfo)

module.exports = router