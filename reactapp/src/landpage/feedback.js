import React, { useState } from 'react';
import "./feedback.css";
import axios from 'axios';
import Landnav from './landnav';


const Feedback = () => {
 

  const [feedback, setFeedback] = useState('');
 
//   const pass=localStorage.getItem('password');
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      feedback: feedback,
    }
    axios.post('http://localhost:8082/api/v1/feed/addFeedback', dataToSend)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      // window.location.reload();
      alert("Your Feedback is submited");
  };



  return (
    <div>
        <div>
            <Landnav/>
        </div>
      <div className='feedback-body'>
          <div className='feedback-container' style={{backgroundColor:'steelblue'}}>
      <h2 className='feedback-heading' style={{fontFamily:'cursive'}}>Feedback </h2>
      <p className='port'>We value your feedback and would love to hear from you!</p>

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="feedback"  className='ports'>Fill Your Feedback:</label>
        
        <input
        className='feedback-input'
          type="text"
          id="feedback"
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
          placeholder="Enter your feedback "
        />
        <button type="submit" style={{fontFamily:'fantasy',backgroundColor:'whitesmoke',width:'50'}}>Submit Feedback</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Feedback;