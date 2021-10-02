let http=require("http");
// let server=http.createServer(function(req,res){
//     res.end("welcome to simple http client Application")
// });

let server=http.createServer((req,res)=>{
    res.end("welcome to simple http client Application")
});

server.listen(9091,()=>console.log("server running on port number 9091"));



// let http=require('http');
// let server=http.createServer((req,res)=>{
//     res.end("Welcome to http")
// });
// server.listen(9091,()=>console.log(("sssssssss"));
