import React from "react";


function AddTransaction({handleText,handleAmount}){
    return (
         <div className="transaction_box">
        <h4>Add New Transaction</h4>
        <lebel>Text</lebel>
        <input onChange={(e)=>handleText(e.target.value)} placeholder="Enter the text"/>
        <lebel>Amount</lebel>
        <input onChange={(e)=>handleAmount(e.target.value)} placeholder="Enter the amount"/>


         </div>
    )
}

export default AddTransaction;