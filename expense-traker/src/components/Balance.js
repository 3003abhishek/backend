import React from "react";


function Balance({balance}){
    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h4>${balance}</h4>
        </div>
    )
}

export default  Balance;