const http = require('http')

const server =  http.createServer((req,res) => {
    console.log(req)
   if ('/home' == req.url) {
     res.end('Welcome home')
   } 
   else if('/about' == req.url){
    res.end('Welcome to About Us page')
   }
   else if('/node' == req.url){
    res.end('Welcome to my Node Js project')
   }
   else{
    res.end('Page is not Found')
   }
    
})

server.listen(4500);