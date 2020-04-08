let pms = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10)
    console.log(num)
    if (num > 5) resolve('success')
    else reject('error')
})
pms.then(data => {
    console.log(data)
})
pms.catch(err => {
    console.log(err)
})