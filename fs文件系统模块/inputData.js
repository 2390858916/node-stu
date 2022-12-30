const fs = require('fs')

fs.readFile('../score.txt','utf-8',function (err,result) {
    if (err){
        return console.log(err.message)
    }
    //按空格分割数据
    const arrOld = result.split(' ')

    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    const arrStr = arrNew.join('\r\n')
    fs.writeFile('../test.txt',arrStr,'utf-8',function (err,result) {
        if (err){
            return err.message
        }
        console.log('success')
    })
})