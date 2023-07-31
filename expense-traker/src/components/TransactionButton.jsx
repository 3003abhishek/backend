import React from  "react";


function TransactionButton({handleClick}){
    return (
        <button onClick={handleClick}>Add Transaction</button>
    )
}

export default TransactionButton;