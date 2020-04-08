const mongoose = require('./connection')
const schema = mongoose.Schema
const library = new schema({
    name: { type: String },
    no: { type: String },
    date: { type: Date },
    status: { type: Boolean },
    user: { type: String }
})
module.exports = mongoose.model('library', library)