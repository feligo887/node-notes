const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const router = require('./router')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// 挂载路由
app.use('/api/v1', router)

// 挂载统一处理服务端错误中间件
// app.use(errorHandler())





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`)
})
