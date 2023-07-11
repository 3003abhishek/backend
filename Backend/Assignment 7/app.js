const express=require("express");
const fs=require("fs");


const app=express();

let tours=JSON.parse(fs.readFileSync("./dev_data/tours.json","utf-8"));
console.log(tours);

app.get("/",(req,res)=>{
   res.status(200).json({
    "status":"Success",
    tours
   });
});


app.listen(8080,()=>{
    console.log("Your port is running at 8080");
})