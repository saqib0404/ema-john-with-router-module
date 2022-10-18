import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='signin-container'>
            <h3>Sign Up</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm your password' required />
                </div>
                <button className='btn-submit'>Sign Up</button>
                <p style={{ marginTop: "4px", marginBottom: "30px", textAlign: "center" }}>Already have an account? <Link to='/signin' className='oranged'>Login</Link></p>
                <div className='hr-container'>
                    <hr className='half-hr' />or <hr className='half-hr' />
                </div>
                <button className='google-signin-btn'>
                    {/* <FontAwesomeIcon></FontAwesomeIcon> &nbsp; */}
                    Continue with Google
                </button>
            </form>
        </div>
    );
};

export default Register;