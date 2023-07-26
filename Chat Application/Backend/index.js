const express=require("express");


const app=express();

const http=require("http");


const cors=require("cors");

app.use(cors());

const {Server}=require("socket.io");




const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log(`New user logged in with id ${socket.id}`);

    socket.on("my_new_event",(data)=>{
        socket.broadcast.emit("message_recieved",data);
    })
})

















server.listen(4000,()=>{
    console.log("The port is running at port 4000");
})