const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req)
    res.end("Hello form Node.js .server")
})

server.listen(3000);
