import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Container ,Card, Button} from 'react-bootstrap';  
import "./style.css";
import CustomNavbar from "./CustomNavbar"

const CardView=()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8083/api/v1/employees')
      .then(response => {
        // Handle the response
        setData(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return (
    
    <div>
      <CustomNavbar/>
    {data.map(item => {
      const { id, firstName, lastName,emailId,salary} = item; // Store properties into variables
      return (
        <div className='' key={id}>
           
  <Container className=''>  
  <Card className="m-2">  
  {/* <Card.Img variant="top" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781439191163/the-merchant-of-venice-9781439191163_hr.jpg"/>   */}
  <Card.Body>  
     
    <table>
      <tr>{id}</tr>
      <tr>{firstName}</tr>
      <tr>{lastName}</tr>
      <tr>{emailId}</tr>
      <tr>{salary}</tr>
      </table> 
    <Button variant="primary">Generate Tax</Button>  
  </Card.Body>  
</Card>  
</Container>  

        </div>
      );
    })}
  </div>
  );
}

export default CardView;
