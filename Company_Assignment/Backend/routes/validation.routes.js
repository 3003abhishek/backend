const express=require("express");
const app=express();
app.use(express.json);



const validRouter=express.Router();

let validationFunc=require(`${__dirname}/../controller/isValidCreditCard.js`)

validRouter.post("/",validationFunc.isValidCreditCard);

module.exports=validRouter;



