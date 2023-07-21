
import axios from "axios";

const baseUrl=process.env.REACT_APP_CREDIT_CARD_VELIDATOR_URL;


console.log(baseUrl);


export const ValidateCard=async(cardNumber)=>{
    try{
      const response=await axios.post("http://localhost:8080/isvalid",{cardNo:cardNumber});

      return response.data;
    }
    catch{
    console.log("Something went wrong");
    }
}


