const http  = require('http')
const server = http.createServer()

server.on('request',(req,res)=>{

    const url = req.url
    const method = req.method
    const str = `url = ${url} method = ${method}`
    res.end(str)
})
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})