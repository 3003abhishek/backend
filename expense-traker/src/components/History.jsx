import React from "react";
import { FaTrash } from 'react-icons/fa';

function History({ history,handleOnDelete }) {
    // console.log(history);
    // console.log(handleOnDelete);
    return (
        <div className="history">

            <div>History</div>
            <hr/>

            {

history ?history.map((el,index) => {
                    return (
                        <div key={index} className="history_stack">
                            <p>{el.cause}</p>
                            <p>{el.amount}</p>
                            <button onClick={()=>handleOnDelete(index)}>
                            <FaTrash  style={{ cursor: 'pointer'}}></FaTrash>
                            </button>

                            

                        </div>
                    )

                }) : 
            <div>No Previous History</div>

           }



        </div>
    )

}

export default History;

// onClick={handleOnDelete(index)}