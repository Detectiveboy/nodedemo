const emitter = require('events')
class evts extends emitter { }
const events = new evts()
events.on('seyname', name => {
    console.log(`我是 ${name}`)
})
events.setMaxListeners(15)
events.emit('seyname', 'node')
events.on('doSomething', () => {
    console.log('我执行了1次')
})
events.on('doSomething', () => {
    console.log('我执行了2次')
})
events.on('doSomething', () => {
    console.log('我执行了3次')
})
events.on('doSomething', () => {
    console.log('我执行了4次')
})
events.on('doSomething', () => {
    console.log('我执行了5次')
})
events.on('doSomething', () => {
    console.log('我执行了6次')
})
events.on('doSomething', () => {
    console.log('我执行了7次')
})
events.on('doSomething', () => {
    console.log('我执行了8次')
})
events.on('doSomething', () => {
    console.log('我执行了9次')
})
events.on('doSomething', () => {
    console.log('我执行了10次')
})
events.on('doSomething', () => {
    console.log('我执行了11次')
})
events.emit('doSomething', true)