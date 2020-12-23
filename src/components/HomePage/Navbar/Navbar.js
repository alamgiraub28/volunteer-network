import React from 'react';
import Logo from '../../../logos/Group 1329.png';
const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       <img src={Logo} style={{height: "50px"}} alt=""/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item pt-2 active">
              <a class="nav-link" href="http://localhost:3000/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#">Donation</a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#">Event</a>
            </li>
            <li class="nav-item pt-2">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><button class="btn btn-primary">Register</button></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><button class="btn btn-secondary">Admin</button></a>
            </li>
          </ul>
        </div>
      </nav> 
        </div>
    );
};

export default Navbar;