import React from "react";
import Node from "./node";

function Tree({treeData}){

    console.log(treeData);
    return (
        <div>
         
          
          {
            treeData.map((el,index)=>{
                return (
                    <div key={index}>
                    <Node node={el}/>

                    </div>
                )
            })
         }


         
         
        </div>
    )
}


export default Tree;