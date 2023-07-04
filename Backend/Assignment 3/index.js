//Routing


const fs=require("fs");

const http=require("http");

const url=require("url");


const server=http.createServer((req,res)=>{

   if(req.url==="/"){
    res.end("Welcome to the home page");
   }
   else if(req.url==="/products"){
    res.end("Welcome to the products page");
   }
   else if(req.url==="/products/detail"){
    res.end("This page will show you  the detail of the page");
   }
   else{
    res.writeHead(404);
   }
   
});

server.listen(8080,()=>{
    console.log("Your server is running at port 8080");
})