import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
<Navbar></Navbar>
<div className="text-center mt-5 ">
<h1 className="mb-4">I grow by helping people in need.</h1>
<form class="form-inline my-2 my-lg-0 justify-content-center">
      <input class="form-control mr-sm-2" type="search" placeholder="Search Your Volunteer Name" aria-label="Search" style={{width: 400}}></input>
      <button class="btn btn-primary my-2 my-sm-0" type="submit" style={{width:'120px'}}>Search</button>
    </form>
</div>


        </div>
    );
};

export default Header;