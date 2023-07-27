import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import Navbar from "../homepage/nav";
import { useNavigate } from 'react-router-dom';



const RegisterForm = () => {
  const navigate = useNavigate();
  const [name,setName]=useState('');
 
  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('');
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{name,email,password});
      if(response.status===200){
        navigate('/login');
        setName('');
        setPassword('');
        setEmail('');
      }
    }
    catch(error){
      console.error("Error: " ,error);
    }
  }
  

  return (
    <>
      <div className="registernav">
        <Navbar/>
      </div>
    <div className="registermain">
    <div className="register-container">
      <h2 className="registerhead">Register Form</h2>
      <form onSubmit={handleSubmit} className="registerdiv">
        <input
          type="text"
          value={name}
          className="registerinput"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          className="registerinput"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email-Id"
        />
        <input
          type="password"
          value={password}
          className="registerinput"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="registerbut">Register</button>
        {/* {errorText && <p className="error-text">{errorText}</p>} */}
      </form>
    </div>
    </div>
    </>
  );
};

export default RegisterForm;
