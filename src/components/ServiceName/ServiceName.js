import React from 'react';
import { Link } from 'react-router-dom';

const ServiceName = ({vService}) => {
    return (
        <div>
        <div className="col-md-3 mb-5">
        <Link to={`/registration/${vService.itemId}`} >
        <div className="card" style={{width: '15rem', height:'24rem'}}>

        <img src={vService.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{vService.name}</h5>
        </div>
        </div>
        </Link>
       
    </div>
        </div>
    );
};

export default ServiceName;