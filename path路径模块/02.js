const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScritp = /<script>[\s\S]*<\/script>/

fs.readFile('../test.html','utf-8',function (err,result){
    if (err){
        console.log(err.message)
    }
    resolveCss(result)
    resolveScript(result)
})

//处理css样式
function  resolveCss(htmlStr){
    const R1 = regStyle.exec(htmlStr)
    const newCss = R1[0].replace('<style>','').replace('</style>','')

    fs.writeFile('../test.css',newCss,err=>{
        if (err){
            return console.log(err.message)
        }
        console.log('css success')
    })
}
function resolveScript(htmlScript){
    const R2 = regScritp.exec(htmlScript)
    const newScript = R2[0].replace('<script>','').replace('</script>','')

    fs.writeFile('../test.js',newScript,err=>{
        if (err){
           return console.log(err.message)
        }
        console.log('js sucess')

    })
}