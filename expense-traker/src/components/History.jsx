import React from "react";

function History({ props }) {
    console.log(props);
    return (
        <div className="history">

            <div>History</div>
            <hr/>

            {

props ?props.map((el) => {
                    return (
                        <div className="history_stack">
                            <p>{el.cause}</p>
                            <p>{el.amount}</p>

                        </div>
                    )

                }) : 
            <div>No Previous History</div>

           }



        </div>
    )

}

export default History;