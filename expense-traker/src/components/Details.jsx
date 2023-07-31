import React from "react";


function Details({income,expense}){
    return (
      <div className="details">
        <div className="income">
            <h4>Income</h4>
            <p>${income}</p>
        </div>

        <div className="expense">
            <h4>Expense</h4>
            <p>${expense}</p>
        </div>

        <div></div>


      </div>
    )
}

export default Details;