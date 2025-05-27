import React from "react";
import img from "../assets/images/service-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocation,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
function Section3() {
  return (
    <>

      <div className="container">
        <div className="row Section">
          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="col-lg-2 col-md-2 ic1">
                <FontAwesomeIcon icon={faMapLocation} />
              </div>
              <div className="col-lg-10 col-md-10">
                <h3>Our location</h3>
                <p>Audhandy towers,New york,NY 10013,USA</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="col-lg-2 col-md-2 ic2">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <div className="col-lg-10 col-md-10">
                <h3>Phone Number</h3>
                <p>(+1)23 567 8945</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="row">
              <div className="col-lg-2 col-md-2 ic3">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="col-lg-10 col-md-10">
                <h3>Mail</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section3;
