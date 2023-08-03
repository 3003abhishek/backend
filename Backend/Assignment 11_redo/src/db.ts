
const dotenv=require("dotenv");

const mongoose=require("mongoose");

dotenv.config();
const mongoUrl=process.env.DB_URL;


function connectToMongoose(){
    mongoose.connect(mongoUrl).then(()=>{
        console.log("Your server is connected to the mongo");
    }).catch(()=>{
        console.log(`Error connecting mongoDb ${mongoUrl}`);
    })
}


module.exports=connectToMongoose;