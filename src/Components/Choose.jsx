import React from "react";
import chooimg from "../assets/images/sideimage.jpg";
import ser1 from "../assets/images/service-1.png";
import ser2 from "../assets/images/service-2.png";

function Choose(){
    return(
        <>
        <div className="choose1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src= {chooimg} width="95%" height="450px"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 choosy">
                    <h2>WHY CHOOSE US</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ratione facilis vero iusto<br></br>
                    hic praesentium at earum labore, quam, quo itaque exercitationem, beatae sequi ex assumenda voluptate laudantium maiores culpa!</p>
                    <div className="row ">
                        <div className="col-lg-3 col-md-3 ig">
                            <img src={ser1}/>
                        </div>
                        <div className="col-lg-9 col-md-9 ig1">
                            <h2>Easy to customise</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="col-lg-3 col-md-3 ig">
                            <img src={ser2}/>
                        </div>
                        <div className="col-lg-9 col-md-9 ig1">
                            <h2>Easy to customise</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-lg-3 col-md-3 ig">
                            <img src={ser2}/>
                        </div>
                        <div className="col-lg-9 col-md-9 ig1">
                            <h2>Easy to customise</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    
                        <div className="col-lg-3 col-md-3 ig">
                            <img src={ser1}/>
                        </div>
                        <div className="col-lg-9 col-md-9 ig1">
                            <h2>Easy to customise</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Choose