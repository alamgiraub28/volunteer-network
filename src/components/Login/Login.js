import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { UserContext } from '../../App';
import GoogleIcon from '../../logos/googleIcon.png';
import './Login.css';
import firebaseConfig from './firebase.config';
import logo from '../../logos/Group 1329.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);

    }
    
        const handleGoogleSignIn = () => {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function (result) {
    
                    const { displayName, email } = result.user;
    
                    const signedInUser = { name: displayName, email}
                    setLoggedInUser(signedInUser);
                    history.replace(from);
    
                }).catch(function (error) {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
    return (
        <div className="mainDiv">
            <div>
            <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
            </div>
            <div className="login">
                <h5>Login With</h5>
                <button className="LoginBtn" onClick={handleGoogleSignIn}><img style={{ width: '40px', marginRight: '30px' }} src={GoogleIcon} alt="googleIcon" /> Continue with Google</button>
                <p>Don't have an account? <span style={{ color: '#67A7FD' }}>Create an account</span></p>
            </div>
        </div>
    );
};

export default Login;