const express=require("express");


app=express();



app.get("/",(req,res)=>{
    res.status(200).json({"message":"Welcome to your port","datatype":"Json"});
});




app.listen(8080,()=>{
    console.log("Your App is running on port 8080");
})