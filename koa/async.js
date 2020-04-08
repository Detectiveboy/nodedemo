async function fn1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn1')
        }, 1000);
    })
}
async function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn2')
        }, 1000);
    })
}
//串行
async function test() {
    console.time('sequentail')
    let rs1 = await fn1()
    let rs2 = await fn2()
    console.log(rs1)
    console.log(rs2)
    console.timeEnd('sequentail')
}
test()
//并行
async function test2() {
    console.time('parallel')
    let [rs1, rs2] = await Promise.all([fn1(), fn2()])
    console.log(rs1)
    console.log(rs2)
    console.timeEnd('parallel')
}
test2()