const express=require("express");
const fs=require("fs");

const morgan=require("morgan");


const app=express();
app.use(morgan("dev"));
app.use(express.json());//This is used to post the json data in the file


app.use((req,res,next)=>{
  console.log("Started using middleware bro");
  next();
});


app.use((req,res,next)=>{
   req.requestTime=new Date().toISOString();
   next();
});

let tours=JSON.parse(fs.readFileSync("./dev_data/tours.json","utf-8"));
// console.log(tours);

//Routing functions
 let getTours=(req,res)=>{

   console.log(req.requestTime);
   res.status(200).json({
    "status":"Success",
    "requestDate":req.requestTime,
    tours
   });
}

let getTour=(req,res)=>{
   let id=req.params.id;
   
       let tour=tours.filter((el)=>{
         return el._id===id;
      });

      res.json({"status":"Success","data":tour});
  
}

let createTour=(req,res)=>{
   let data=req.body;

   tours.push(data);

   fs.writeFile("./dev_data/toursWrite.json",JSON.stringify(tours),err=>{
      res.status(201).json({"status":"created",tours});
   }
   
   )
   
}

let deleteTour=(req,res)=>{
   let id=req.params.id;
   if(id>=tours.length){
     res.status(404).json({"status":fail,"message":"Wrong Id"});
   }
   else{
     res.send(204).json({"status":"Successful","data":null});
   }
}



//Routes

//SomeWhat better way of creating routes


// app.get("/tours",getTours);


// app.get("/tours/:id",getTour);


// app.post("/tours",createTour);


// app.delete("/tours/:id",deleteTour);


//We can write the above routes in more better way by chaining the same

app.route("/tours").get(getTours).post(createTour);
app.route("/tours/:id").get(getTour).delete(deleteTour);




app.listen(8080,()=>{
    console.log("Your port is running at 8080");
})