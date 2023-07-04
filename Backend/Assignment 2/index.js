//Create a server


const fs=require("fs");
const http=require("http");


const server=http.createServer((req,res)=>{
    res.end("Welcome to your port");
});


server.listen(8080,()=>{
    console.log("The port is running at 8080");
})



