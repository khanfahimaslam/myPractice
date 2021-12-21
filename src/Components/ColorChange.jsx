
import React,{useState} from "react";

export const ColorChange=()=>{
    const [chang,setChange]=useState("yellow");
    
    return(
        <div style={{backgroundColor:chang}}>
            {/* <button onClick={(()=>setChange("red"))}> Click to Change Color </button> */}
            <button onClick={(()=>setChange(chang==="gray"?"yellow":"gray"))}>
            Click to Change Color </button>
        </div>
    )

}