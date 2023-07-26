import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";

const {io}=require("socket.io-client");
const socket=io.connect("http://localhost:4000");

function App() {
   const [message,setMessage]=useState("");
   const [message_received,setMessage_received]=useState("");



    let handleOnClick=()=>{

    //  console.log(message);

    socket.emit("my_new_event",{
      message
    });

    }

    useEffect(()=>{
    socket.on("message_recieved",(data)=>{
      setMessage_received(data.message);
      })
    },[socket]);
  
  return (
    <div className="App">
     <input onChange={(e)=>setMessage(e.target.value)} placholder="Please Enter the Message"/>
     <button onClick={handleOnClick}>Send Message</button>
    <div>{message_received}</div>

    </div>

  );
}

export default App;
