const express=require("express");
const fs=require("fs");


const app=express();

app.use(express.json());//This is used to post the json data in the file

let tours=JSON.parse(fs.readFileSync("./dev_data/tours.json","utf-8"));
// console.log(tours);

app.get("/tours",(req,res)=>{
   res.status(200).json({
    "status":"Success",
    tours
   });
});


app.get("/tours/:id",(req,res)=>{
   let id=req.params.id;
   // if(id>23||!id){
   //    res.json({"status":"error","message":"Please enter a valid id "});
   // }
   // else{
       let tour=tours.filter((el)=>{
         return el._id===id;
      });

      res.json({"status":"Success","data":tour});
   // }


})


app.post("/tours",(req,res)=>{
   let data=req.body;

   tours.push(data);

   fs.writeFile("./dev_data/toursWrite.json",JSON.stringify(tours),err=>{
      res.status(201).json({"status":"created",tours});
   }
   
   )
   
});


app.delete("/tours/:id",(req,res)=>{
    let id=req.params.id;
    if(id>=tours.length){
      res.status(404).json({"status":fail,"message":"Wrong Id"});
    }
    else{
      res.send(204).json({"status":"Successful","data":null});
    }
});


app.listen(8080,()=>{
    console.log("Your port is running at 8080");
})