const emitter = require('events')
class evts extends emitter { }
const events = new evts()
events.once('doThing', () => {
    console.log('我只执行一次callback')
})
events.once('doThing', () => {
    console.log('我执行了第二次')
})
events.emit('doThing')
const fn = () => {
    console.log(1)
}
const fn1 = () => {
    console.log(2)
}
events.once('doSomething', fn)
events.once('doSomething', fn1)
setTimeout(() => {
    events.emit('doSomething', fn)
    events.emit('doSomething', fn1)
}, 1000);
