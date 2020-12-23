import React from 'react';
import './Registration.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useParams, Link } from 'react-router-dom';
import volunteerServices from '../HomePage/fakeData/fakeData';
import { useForm } from 'react-hook-form';
import logo from '../../logos/Group 1329.png';
import Navbar from '../HomePage/Navbar/Navbar';
const Registration = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { itemId} = useParams();
  const volunteerItem = volunteerServices.find(vs => vs.uniqueId === itemId )
  
  const { register, errors, handleSubmit } = useForm();


  const onSubmit = data => {
    data.created = new Date();
    fetch('http://localhost:5000/addUser', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({data, loggedInUser})
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Sent Successfully.');
      }
    })
  }


    return (
        <div className="registration-container">
        <Navbar></Navbar>
    <div>
      <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="registration">
      <div className="form-group">
      <h5 className="text-center font-italic font-weight-bold">Complete the bellow Field for Registration</h5>
      <br/>
      <label htmlFor="">Full Name</label>
      <input name="Name" type="name" defaultValue={loggedInUser.name} className="form-control"ref={register({ required: true })}/>
        {errors.Name && <span className="text-danger">your name is required<br /></span>}
      </div> 
      <div className="form-group">
       <label htmlFor="">User Name or email</label>
       <input name="Email" type="email" defaultValue={loggedInUser.email}className="form-control" ref={register({ required: true })} />
        {errors.Email && <span className="text-danger">your email is required<br/></span>} 
      </div>
       <div className="form-group">
           <label htmlFor="">Date</label>
           <input name="RegisterTime" type="date" className="form-control" ref={register({ required: true })} />
           {errors.RegisterTime && <span className="text-danger">RegisterTime is required<br /></span>}

         </div>
         <div className="form-group">
          <label htmlFor="">Description</label>
          <input name="Description" type="text" className="form-control" ref={register({ required: true })} />
          {errors.Description && <span className="text-danger">Description is required<br /></span>}

        </div>     
        <div className="form-group">
          <label htmlFor="">Organize books at the library</label>
          <input name="VolunteeringName" defaultValue={volunteerItem.name} type="text" className="form-control" ref={register({ required: true })} />
          {errors.VolunteeringName && <span className="text-danger">VolunteeringName is required<br/></span>}
        </div>
        <div>
        
        <button className="form-control btn btn-primary" type ="submit">Submit</button>
        </div>
        
      </div>
  </form>
  </div>
    );
};



export default Registration;