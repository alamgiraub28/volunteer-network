import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import ServiceName from '../../ServiceName/ServiceName';
import volunteerServices from '../fakeData/fakeData';
const Home = () => {
    return (
        <div class="bg-pic">
        <Header></Header>
        <div className="container App">
            <div className="row mt-5 card-container mx-auto">
            {
            volunteerServices.map(volunteerServices => <ServiceName key={volunteerServices.name} volunteerServices={volunteerServices}></ServiceName>)
            }

            </div>
        </div>
        </div>
    );
};

export default Home;