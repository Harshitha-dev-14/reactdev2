import React, {useEffect,useState} from "react";
function About(){
    const[count,setCount]=useState(0);
    const handleCount=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
     console.log("Updating useEffect")   
    })
    return(
        <>
            <h1>your count is {count}</h1>
            <button onClick={handleCount}>Increase</button>
        </>
    )
}
export default About