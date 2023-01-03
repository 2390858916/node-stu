const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')

server.on('request',(req,res)=>{
    const url = req.url
    // const fpath = (path.resolve(__dirname,'../test/'+`${url}`))
    let fpath = ''
    if(url === '/'){
        fpath = (path.resolve(__dirname,'../test/index.html'))
    }else{
        fpath = path.resolve(__dirname,'../test/'+`${url}`)
    }
    fs.readFile(fpath,'utf-8',(err,result)=>{
        if (err){
            console.log(err.message)
            res.end('404 not fount')
        }
        res.end(result)
    })
})
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})