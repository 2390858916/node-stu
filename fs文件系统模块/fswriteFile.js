const fs = require('fs')
fs.writeFile('../test.txt','write content','utf-8',function (err,result){
    if (err){
        return err.message
    }
    console.log('success')
})