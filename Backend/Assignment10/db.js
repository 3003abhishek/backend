const mongoose=require("mongoose");


let mongoDbUrl="mongodb://127.0.0.1:27017/mydatabase1";


let connectMongoDb=()=>{
    mongoose.connect(mongoDbUrl).then(()=>{
        console.log("Successfully connected to mongoDb");
     });
}


module.exports=connectMongoDb;




