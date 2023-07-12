const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if( url === '/'){
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write("<body><form action='/message' method ='POST'><input type='text' name='messae'><button>Send</button></from></body>");
    res.write("</html>");
    res.end();                                                               
  }
  if( url === '/message' && method === 'POST'){
    fs.writeFileSync("message.txt", "Dummy")
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(4000);
