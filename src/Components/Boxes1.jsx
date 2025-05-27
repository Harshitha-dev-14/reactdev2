import React, { useState } from "react";
import imgx from "../assets/images/service-1.png";
import imgx1 from "../assets/images/service-2.png";
import imgx2 from "../assets/images/service-3.png";
import imgx3 from "../assets/images/service-4.png";
function Boxes1(){
const[text,setText]=useState([
    {
        img:imgx,
        name:"Engine Repairs",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx1,
        name:"Electrical",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx2,
        name:"Plumbing",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx3,
        name:"Repair House",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx,
        name:"Wall paint",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx3,
        name:"Home Maintanence",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx2,
        name:"Installation",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        img:imgx3,
        name:"Garden Repairs",
        paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    
])
return(
    <>
    <div className="container">
        <div className="row">
            {text.map((ele)=>{
              return(
                <div className="col-lg-3">
                <div className="space">
                <img src= {ele.img}/>
                <h4>{ele.name}</h4>
                <p>{ele.paragraph}</p>
                </div>
                </div>
              )
            })}
        </div>  
        </div>
    
    </>
)
}
export default Boxes1
