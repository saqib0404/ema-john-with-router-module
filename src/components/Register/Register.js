import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Register.css';

const Register = () => {
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setPasswordError("Password must be 6 or more characters")
            return;
        }
        if (confirm !== password) {
            setPasswordError("Password didn't match")
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setSuccess("User create Successfully")
                form.reset();
            })
            .catch(err => {
                console.log(err);
            })
        console.log(email, password, confirm);
    }

    return (
        <div className='signin-container'>
            <h3>Sign Up</h3>
            <form onSubmit={handleRegister}>
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
                    <p className='wrong'>{passwordError}</p>
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