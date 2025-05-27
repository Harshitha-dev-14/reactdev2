import React from "react";
function Comp3({name}){
    console.log("Component 3")
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}
export default React.memo(Comp3)
