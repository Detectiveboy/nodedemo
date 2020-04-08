const student = require('./schema')
const required = () => {
    throw new Error('argments must is defined')

}
const addData = (obj = { name: null, num: 0, sex: '男', graduated: false }) => {
    let data = new student({
        name: obj.name,
        num: obj.num,
        sex: obj.sex,
        graduated: obj.graduated
    })
    data.save((err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// addData()
const rmData = (condition = required()) => {
    student.remove(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
//rmData({ name: null })
const update = (condition = required(), result = required()) => {
    student.update(condition, result, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// update({name:null},{name:'李四'})
const findData = (condition) => {
    student.find(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// findData({name:'李四'})
const dataCount = (condition) => {
    student.count(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// dataCount()
const dataId = (condition) => {
    student.findId(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}