const http = require('http')

const server =  http.createServer((req,res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My frist page</title><head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000);