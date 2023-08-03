 const express=require("express");
const connectToDB=require("./db");

const cors=require("cors");
const bodyParser=require("body-parser");

const auth=require("./routes/auth");

const app=express();

app.use(cors());
app.use(bodyParser.json());


app.use("/auth",auth(express));


const port=process.env.PORT;


app.listen(port,()=>{
    connectToDB();
    console.log(`Your port is working at port ${port}`);
});