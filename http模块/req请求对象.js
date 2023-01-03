const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{

    //req 客户端（用户）请求数据
    const url = req.url
    const method = req.method
    const str = `req.url = ${url} 中文 req.method = ${method}`
    console.log(str)
    res.end(str)
    // 调用res 向客户端响应内容

})

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})