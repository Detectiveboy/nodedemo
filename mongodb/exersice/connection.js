const mongoose = require('mongoose')
const dbPath = 'mongodb://127.0.0.1:27017/myData'
mongoose.connect(dbPath, { autoReconnect: true })
mongoose.connection.on('connected', () => {
    console.log('连接成功')
})
mongoose.connection.on('error', (err) => {
    throw new Error(err)
})
mongoose.connection.on('disconnected', () => {
    console.log('断开连接')
})
module.exports = mongoose