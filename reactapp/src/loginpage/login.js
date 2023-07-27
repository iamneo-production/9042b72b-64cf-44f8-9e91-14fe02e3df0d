
import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import Navbar from "../homepage/nav";
import { login } from "../redux/user";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
 
  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('');
  const dispatch =useDispatch();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{email,password});
      if(response.status===200){
        navigate('/landing');
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
      <div className="loginnav">
        <Navbar/>
      </div>
    <div className="loginmain">
    <div className="login-container">
      <h2 className="loginhead">LOGIN FORM</h2>
      <form onSubmit={handleSubmit} className="logindiv">
         <input
          type="text"
          value={email}
          className="logininput"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EmailId"
        />
        <input
          type="password"
          value={password}
          className="logininput"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="loginspace">
        <button type="submit" className="loginbut" onClick={()=>dispatch(login({name:email}))}>Login</button>
        </div>
        {/* {errorText && <p className="error-text">{errorText}</p>} */}
      </form>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
