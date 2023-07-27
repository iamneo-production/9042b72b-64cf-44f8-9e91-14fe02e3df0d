import { useState } from 'react';
import img from './imgmatri.jpg';
import { Link } from 'react-router-dom';
 
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender]=useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleGender = (e) => {
        setGender(e.target.value);
        setSubmitted(false);
    };
 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
 
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <p className='must'>Please enter all the fields</p>
            </div>
        );
    };
 
    return (
        <>
        <div className="form">
            <img className="regimg" src={img}></img>
            <div className='reghead'>
                <p className='head'>REGISTER FREE</p>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form className='regfree'>
                <div className='reginput'>
                <input onChange={handleName} className="input" placeholder='Username'  value={name} type="text" /><br></br><br></br>
                <input onChange={handleEmail} className="input" placeholder='EmailId' value={email} type="email" /><br></br><br></br>
                <input onChange={handleGender} className="input" placeholder='Gender' value={gender} type="gender" /><br></br><br></br>
                <input onChange={handlePassword} className="input" placeholder='Create Password' value={password} type="password" /><br></br>
                </div>
                <div className='regsub'>
                <button onClick={handleSubmit} className="btn"
                        type="submit"><Link to='/login'>
                    REGISTER</Link>
                </button>
                </div>
            </form>
        </div>
        </>
    );
}