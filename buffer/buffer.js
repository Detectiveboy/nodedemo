{
    const buf = new Buffer(10)
    buf.fill('A', 0, 5)
    buf.fill('1', 5, 10)
    console.log(buf.toString('utf8'))
}
{
    const str = '我是buffer'
    const buf = new Buffer(str)
    console.log(buf.toString('utf8'))
}
{
    const buf = new Buffer(9)
    buf.write('我爱你')
    console.log(buf.toString('utf8'))
}
{
    const arr = [1, 2, 3, 4, 'a', 'b']
    const buf = new Buffer(arr)
    console.log(buf.toJSON())
}
{
    const buf1 = new Buffer([1, 2, 3, 4, 5])
    const buf2 = new Buffer([6, 7, 8, 9, 10])
    const buf3 = Buffer.concat([buf1, buf2])
    console.log(buf3.toJSON())
}
