import React from "react";
import pic1 from "../assets/images/service-1.png";
import pic2 from "../assets/images/service-2.png";
import pic3 from "../assets/images/service-3.png";
import pic4 from "../assets/images/service-4.png";
function Ourservices(){
    return (
        <>
        <div className="serv">
                <h1>OUR SERVICES</h1>
                <div className= "row rf">
                <div className= "col-lg-3 col-md-3 col-sm-12 col-12 col1">
                    <img src={pic1}/>
                    <h2>Engine Repairs</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className= "col-lg-3 col-md-3 col-sm-12 col-12 col1">
                    <img src={pic2}/>
                    <h2>Electrical</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className= "col-lg-3 col-md-3 col-sm-12 col-12 col1">
                    <img src={pic3}/>
                    <h2>Plumbing</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className= "col-lg-3 col-md-3 col-sm-12 col-12 col1">
                    <img src={pic4}/>
                    <h2>Repair House</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Ourservices