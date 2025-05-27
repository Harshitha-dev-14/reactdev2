import React, { useState } from "react";
import boxesimg from "../assets/images/service-1.png";
import boxesimg1 from "../assets/images/service-2.png";
import boxesimg2 from "../assets/images/service-3.png";
import boxesimg3 from "../assets/images/service-4.png";

function Boxes(){
    
    return(
        <>
         <div class="container">
        <div class="three">
            <div class="row1">
                <div class="service1">
                    <img src={boxesimg} alt="service" />
                    <h3>Engine Repairs</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg1} alt="service" />
                    <h3>Electrical</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg2} alt="service" />
                    <h3>Plumbing</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg3} alt="service" />
                    <h3>Repair House</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="row2">
                <div class="service1">
                    <img src={boxesimg} alt="service" />
                    <h3>Wall Paint</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg1} alt="service" />
                    <h3>Home Maintenance</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg2} alt="service" />
                    <h3>Installation</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="service1">
                    <img src={boxesimg3} alt="service" />
                    <h3>Garden Repairs</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Boxes