import React from 'react';
import './Signup.css'
import { NavLink } from 'react-router-dom';

const Signup = () => {

    return (
        <>
            <div className="signup-box">
                <div className="signup-group form-headers">
                    <img className="img-logins" src="./images/img1.jpeg" alt="a image" />
                    <h2>ALPHA-X</h2>
                </div>
                <div className="signup-group form-h2">
                    <h2>Create an Account</h2>
                    <p><NavLink className="navu-link" to='/'>Back to Login Page</NavLink></p>
                </div>
                <div className="signup-group sign-input">
                    <input type="text" id="username" autoComplete="off" name="username" placeholder="  Username" />
                </div>
                <div className="signup-group sign-input">
                    <input type="text" id="username" autoComplete="off" name="username" placeholder="  Email" />
                </div>
                <div className="signup-group sign-input">
                    <input type="text" id="username" autoComplete="off" name="username" placeholder="  Password" />
                </div>
                <div className="signup-group sign-input">
                    <input type="text" id="username" autoComplete="off" name="username" placeholder="  Confirm Password" />
                </div>

                <div className="signup-group sign-submit">
                    <button className="btn-submit" type="submit">Create Account</button>
                </div>
                <p className="privacy">By creating an account, you agree to ALPHA-X Terms & Conditions and Privacy Policy</p>


            </div>


        </>



    );


}


export default Signup;