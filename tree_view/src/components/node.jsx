import React, { useState } from "react";
import Tree from "./tree";



function Node({ node }) {


    let [toggle, setToggle] =useState(false);

   

    let { key, label, children } = node;
    

    

    return (

        <div onClick={() => setToggle(!toggle)}>
            <span>{label}</span>

            
           <div>
            {toggle && <Tree treeData={children}/>}
           </div>



                
               




        </div>

    )
}

export default Node;