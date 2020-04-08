exports.clock = () => {
    setInterval(() => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        let date_ = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
        let day = date.getDay()
        let hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
        let min = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
        let seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
        let str = `${year}-${month}-${date_} 星期${day} ${hour}:${min}:${seconds}`
        process.stdout.write(`${str}\n`)
    }, 1000)
}