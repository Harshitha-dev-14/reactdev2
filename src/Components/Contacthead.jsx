import React from "react";
import logoimg from "../assets/images/logo.png";
function Contacthead(){
return(
   <header>
    <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logoimg} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">PAGES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">BLOG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </header>
)
}
export default Contacthead
