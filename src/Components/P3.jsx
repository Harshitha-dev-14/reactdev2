import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function P3(){
    return(
        <>
        <div className="page3">
        <div className="container">
        <h1>404</h1>
        <h3>Oops, Sorry We Can't Find That Page !</h3>
        <form>
            <input type="text" placeholder="Search Here"></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
        <button type="button" class="btn btn-warning">Go Back Home</button>
        </div>
        </div>
        </>
    )
}
export default P3