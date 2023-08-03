let mongose=require("mongoose");

const userSchema=mongose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
       
    }
});


const User=mongose.model("User",userSchema);

module.exports=User;