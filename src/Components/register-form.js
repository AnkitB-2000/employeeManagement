import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import  "./style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmpassword, setCnfrmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail]=useState('');
    const [mob,setMob]=useState('');
    const [address,setAddress]=useState('');
    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/');
       }
       

  
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:8080/register', { username, password });
          console.log(response.data); // Assuming the server returns a response message
          // Handle successful login
        } catch (error) {
          console.error(error); // Handle error
        }
      };
  
    return (
      <div className='LoginForm'>
      <h1><b>Register Form</b></h1>
      
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          style={{margin:"20px"}}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          style={{margin:"20px"}}
        />
        <br></br>
         <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{margin:"20px"}}
        />
        <input
          type="text"
          value={mob}
          onChange={(e) => setMob(e.target.value)}
          placeholder="Mobile Number"
          style={{margin:"20px"}}
        />
        <br></br>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          style={{margin:"20px"}}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
        <input
          type="password"
          value={cnfrmpassword}
          onChange={(e) => setCnfrmPassword(e.target.value)}
          placeholder="Confirm Password"
          style={{margin:"20px"}}
        />
        <br></br>
        <Button variant='dark' type="submit" ><b>Register</b></Button>
      </form>
      <br></br>
      
      <Button variant='dark' onClick={handleClick}><b>Existing User</b></Button>
      </div> );
  };
  
  export default RegisterForm;
  