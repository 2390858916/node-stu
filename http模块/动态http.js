const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    let content = `<h1>404 not fount </h1>`
    if ('/'===url || '/index.html'===url){
        content = '首页'
        console.log(`user into ${url}`)
    }else if ('/about.html'===url) {
        console.log(`user into ${url}`)
        content = '关于页面'
    }
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(content)
})
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})