const fs = require('fs')

//err, dataStr 自定义

fs.readFile('../test.txt','utf-8',function (err,dataStr){
    if (err){
       return  console.log(err)
    }
    console.log(dataStr)
})
