const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const validRouter=require(`${__dirname}/routes/validation.routes.js`)

let validFunc=require("./controller/isValidCreditCard");



app.use("/isvalid",validRouter);


app.listen(8080,()=>{
    console.log("Your port is running at 8080");
})