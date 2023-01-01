const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log('visiting')
})

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})