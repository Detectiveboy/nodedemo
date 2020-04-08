const library = require('./schema')
const required = () => {
    throw new Error('arguments must is defined')
}
const addData = (obj = { name: null, num: 0, sex: '男', graduated: false }) => {
    let data = new library({
        name: obj.name,
        no: obj.no,
        date: obj.date,
        status: obj.status,
        user: obj.user
    })
    data.save((err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// addData()
const rmData = (condition = required()) => {
    library.remove(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
//rmData({ name: null })
const update = (condition = required(), result = required()) => {
    library.update(condition, result, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// update({name:null},{name:'李四'})
const findData = (condition) => {
    library.find(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// findData({name:'李四'})
const dataCount = (condition) => {
    library.count(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
// dataCount()
const dataId = (condition) => {
    library.findId(condition, (err, res) => {
        if (err) throw new Error(err)
        else console.log(res)
    })
}
const arr = [
    {
        name: 'C#编程基础',
        no: 'A001',
        date: new Date(),
        status: true,
        user: '王小双'
    },
    {
        name: 'Java语言基础',
        no: 'A002',
        date: new Date(),
        status: false,
        user: '张媛媛'
    },
    {
        name: '计算机基础',
        no: 'A003',
        date: new Date(),
        status: false,
        user: '何勤勤'
    },
    {
        name: 'Photoshop商业网站设计',
        no: 'A004',
        date: new Date(),
        status: false,
        user: '何勤勤'
    },
    {
        name: 'SQL Server数据库基础',
        no: 'A005',
        date: new Date(),
        status: true,
        user: '张松'
    },
    {
        name: '响应式前端框架 Bootstrap应用',
        no: 'B001',
        date: new Date(),
        status: false,
        user: '李青青'
    },
    {
        name: 'H5+CSS3 web开发',
        no: 'B002',
        date: new Date(),
        status: true,
        user: '钟鹏'
    },
    {
        name: 'JavaScript&JQuery应用指南',
        no: 'B003',
        date: new Date(),
        status: false,
        user: '张媛媛'
    },
    {
        name: 'VUE.js混合APP开发',
        no: 'B004',
        date: new Date(),
        status: false,
        user: '方芳'
    },
    {
        name: '企业级全栈开发',
        no: 'B005',
        date: new Date(),
        status: true,
        user: '袁莉莉'
    },
]
// let length = arr.length
// for (let i = 0; i < length; i++) {
//     addData(arr[i])
// }
// rmData({ name: 'Java语言基础' })
update({ no: 'B005' }, { $set: { status: false } })