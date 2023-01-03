const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScritp = /<script>[\s\S]*<\/script>/
const regHtml = /<body>[\s\S]*<\/body>/

fs.readFile('../index.html','utf-8',function (err,result){
    if (err){
        console.log(err.message)
    }
    resolveCss(result)
    resolveScript(result)
    resolveHtml(result)
})

//处理css样式
function  resolveCss(htmlStr){
    const R1 = regStyle.exec(htmlStr)
    const newCss = R1[0].replace('<style>','').replace('</style>','')

    fs.writeFile('../index.css',newCss,err=>{
        if (err){
            return console.log(err.message)
        }
        console.log('css success')
    })
}

//js
function resolveScript(htmlScript){
    const R2 = regScritp.exec(htmlScript)
    const newScript = R2[0].replace('<script>','').replace('</script>','')

    fs.writeFile('../index.js',newScript,err=>{
        if (err){
           return console.log(err.message)
        }
        console.log('js sucess')

    })
}
//html
function resolveHtml(html){
    const R3 = regHtml.exec(html)
    const newHtml = R3[0].replace('<body>','').replace('</body>','')
    fs.writeFile('../score.txt',newHtml,err=>{
        if (err){
           return console.log(err.message)
        }
        console.log('html success')
    })
}