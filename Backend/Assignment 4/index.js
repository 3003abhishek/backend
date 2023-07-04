const fs=require("fs");

const http=require("http");
const url=require("url");
let jsondata=fs.readFileSync("./dev-data/products.json","utf-8");

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.end("Welcome to the home page");
    }
    else if(req.url==="/products"){
       res.end(jsondata);
           
        
    }
    else{
        res.writeHead(404);
        res.end("Something went wrong");
    }

   
});


server.listen(8080,()=>{
    console.log("Your server is running on port 8080");
})