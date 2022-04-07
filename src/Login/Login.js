import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';


const Login = () => {


    return (
        <>
            <section className="loginpage">
                <form method="">
                    <div className="login-box">
                        <div className="login-grp form-header">
                            <img className="img-login" src="./images/img1.jpeg" alt="a image" />
                            <h2>ALPHA-X</h2>
                        </div>
                        <div className="login-grp form-2">
                            <h3>Sign in</h3>
                            <p>New to ALPHA-X ? <NavLink className="navu-link" to='/signup'>Create new account!!</NavLink></p>
                        </div>
                        <div className="login-grp input-form">
                            <input type="text" id="username" autoComplete="off" name="username" placeholder="  Username" />
                        </div>
                        <div className="login-grp input-form">
                            <input type="password" id="password" autoComplete="off" name="password" placeholder="  Password" />
                        </div>
                        <div className="login-grp check-form">
                            <h3><input type="checkbox" />  Keep me signed in on this device</h3>
                        </div>
                        <div className="login-grp btn-forms">
                            <button className="btn-submit">Sign in</button>
                            <p>or Sign in with</p>
                            <button type="submit" className="btn-nav"><a href="https://www.facebook.com" target="_blank">
                            <i class="fa-brands f-icons fa-facebook"></i>Facebook</a></button>
                            <button type="submit" className="btn-nav"><a href="https://www.google.com" target="_blank">
                            <i class="fa-brands f-icons fa-google"></i>Google</a></button>
                        </div>


                    </div>
                </form>

            </section>

        </>
    );


}


export default Login;