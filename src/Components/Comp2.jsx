import React from "react";
function Comp2({count1,handleCount1}){
    console.log("Component 2")
    return(
        <>
        <h1>{count1}</h1>
        <button onClick={handleCount1}>COUNT1</button>
        </>
    )
}
export default React.memo(Comp2)
