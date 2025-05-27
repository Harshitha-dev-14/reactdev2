import React from "react";
import bannerimg2 from "../Components/images/bannerimg2.png"
function Banner(){
    return (
        <>
        <div class="container">
            <div class="row handy1">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 banner1">
                    <img src="images/Banner-img2.png" alt="banner"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <h2>Expert Handyman & Remodelling</h2>
                <p>Learning offline and online our certified trainers
                    give you hands-on knowledge and experience via real-time projects.</p>
                <button type="button" class="btn btn-warning">LOGIN</button>
                <button type="button" class="btn btn-outline-warning">GET ACCOUNT</button>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Banner