console.log(`当前运行的文件路径${__filename}`)
console.log(`当前运行的文件夹路径${__dirname}`)
const clock = require('../myModules/clockPackage').clock
const server=require('../myModules/easyServer').createServer
const supervisor=require('../node_modules/supervisor')
clock()
server()

