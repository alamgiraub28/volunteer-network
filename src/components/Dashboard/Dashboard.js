import React from 'react';
import sampleImg from '../../images/animalShelter.png';
import { Link } from 'react-router-dom';
const Dashboard = (date) => {
    fetch('http://localhost:5000/dashboard', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({date})
    })
    .then(res => res.json())
    .then(dashboard => {
        
    })
    return (
        <div>
        <div className="col-md-3 mb-5">
        <Link to= {`/dashboard`}>
        <div className="card" style={{width: '15rem', height:'24rem'}}>

        <img src={sampleImg} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">{'Date'}</h5>
        </div>
        </div>
        </Link>
        </div>
        </div>
    );
};

export default Dashboard;