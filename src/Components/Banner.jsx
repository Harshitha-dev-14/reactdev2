import React from "react";
import bannerimg from "../assets/images/Banner-img2.png"
function Banner(){
    return(
        <div className ="part2">
        <div className="container">
            <div className="row handy1">
                <div class="col-lg-5 col-md-5 col-sm-12 col-12 banner1">
                    <img src= {bannerimg} alt="banner"></img>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-12 handyman" >
                <h2>Expert Handyman &amp; Remodelling</h2>
                <p>Learning offline and online our certified trainers
                    give you hands-on <br></br>knowledge and experience via real-time projects.</p>
                <button type="button" class="btn btn-warning ">LOGIN</button>
                <button type="button" class="btn btn-outline-warning ">GET ACCOUNT</button>
                </div>
            </div> 
        </div>
      </div>
   
    )
}
export default Banner
