const clock = require('../myModules/clockPackage').clock
const emitter = require('events')
class evts extends emitter { }
const events = new evts()
events.on('myClock', clock)
events.emit('myClock')