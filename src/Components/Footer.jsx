import { faAngleRight, faClock, faEnvelope, faMapLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Footer(){
    return(
        <>
        <div className="footer">
        <div classname="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm12 col-12 us">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faMobileScreenButton} /> +1 23 567 896<br></br> Support 24/7 Weekdays</li>
                        <li><FontAwesomeIcon icon={faMapLocationDot} /> Auhandy Tower,New York,NY 10013,USA</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> info@example.com </li>
                        <li><FontAwesomeIcon icon={faClock} /> Weekdays: 9:00am - 6:00pm</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 electrical">
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Electrical
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Plumbing
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Engine Repair
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Repair House
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Home Maintanence
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Wall Paint 
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 install">
                <ul>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Installation
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Garden Repairs
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Soil Drilling
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Support 24/7
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Inspection House
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faAngleRight} /> Remodelling Ceiling
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 box">
                    <h4>GET<span> 25% </span> OFF</h4>
                    <p>Electrical Services</p>
                    <h6>Reddem Code:<span> HANDYHPY28</span></h6>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Footer
