import React from "react";
import cl1img from "../assets/images/client-1.png";
import cl1img1 from "../assets/images/client-2.png";
import cl1img2 from "../assets/images/client-3.png";
import cl1img3 from "../assets/images/client-4.png";
function Clients(){
    return(
        <>
        <div class="container">
            <div class="clients">
                <div>
                    <img src={cl1img} alt="client1"/>
                </div>
                <div>
                    <img src={cl1img1} alt="client-2"/>
                </div>
                <div>
                    <img src={cl1img2} alt="client3"/>
                </div>
                <div>
                    <img src={cl1img3} alt="client4"/>
                </div>
            </div>
        </div></>
    )
}
export default Clients