import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='signin-container'>
            <h3>Login</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='your password' required />
                </div>
                <button className='btn-submit'>Login</button>
                <p style={{ marginTop: "4px", marginBottom: "30px", textAlign: "center" }}>New to Ema-John? <Link to='/register' className='oranged'>Create New Account</Link></p>
                <div className='hr-container'>
                    <hr className='half-hr' />or <hr className='half-hr' />
                </div>
                <button className='google-signin-btn'>
                    <FontAwesomeIcon></FontAwesomeIcon> &nbsp;
                    Continue with Google
                </button>
            </form>
        </div>
    );
};

export default SignIn;