const mongoose = require('./connection')
const schema = mongoose.Schema
const student = new schema({
    name: { type: String },
    num: { type: Number },
    sex: { type: String },
    graduated: { type: Boolean }
})
module.exports = mongoose.model('student', student)