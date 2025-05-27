import React from "react";
function Comp1({count,handleCount}){
    console.log("Component 1")
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleCount}>COUNT</button>
        </>
    )
}
export default React.memo(Comp1)
