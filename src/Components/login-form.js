import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import  "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

  function handleClick(event) {

   navigate('/RegisterForm');
  }
  function handleClick2(event) {

    navigate('/CardView');
   }
  
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          
          const response = await axios.post("http://localhost:8083/api/v1/login?username="+username+"&"+"password="+password);
          console.log(response.data); // Assuming the server returns a response message
          // Handle successful login
          if(response.data=="Login Succesfull")
          {
              handleClick2();
          }
          else{
            setMessage("Invalid Credentials");

          }
        } catch (error) {
          console.error(error); // Handle error
        }
      };
  
    return (
      <div className='LoginForm'>
      <h1><b>Login Form</b></h1>
      
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{margin:"20px"}}
        />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{margin:"20px"}}
        />
        <br></br>
        <Button variant='dark' type="submit"><b>Login</b></Button>
        <br></br>
      <a href="">Forget Password</a>
      </form>
      <h2 style={{color:"red"}}>{message}</h2>
      <br></br>
      <Button variant='dark' onClick={handleClick}><b>New User Register</b></Button>
     
      </div> );
  };
  
  export default LoginForm;
  