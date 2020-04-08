const mongoose = require('mongoose')
const dbPath = 'mongodb://127.0.0.1:27017/myData'
mongoose.connect(dbPath, { autoReconnect: true })
mongoose.connection.on('connected', () => {
    console.log('连接成功')
})
mongoose.connection.on('error', (err) => {
    if (err) throw new Error(err);

})
mongoose.connection.on('disconnected', () => {
    console.log('连接断开')
})
module.exports = mongoose