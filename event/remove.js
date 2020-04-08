const emitter = require('events')
class evts extends emitter { }
const events = new evts()
const fn = () => {
    console.log('我执行了')
}
events.on('doThing', fn)
setTimeout(() => {
    let bol = events.removeListener('doThing',fn)
    if (bol) console.log('移出事件成功')
    else console.log('移出失败')
}, 1000);