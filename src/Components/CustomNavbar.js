import React,{useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo.png'; 
import "./style.css";

function CustomNavbar() {

  const[data,setData]=useState([]);
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


  const[search,setSearch]=useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  function handelChange(event)
  {
    setSearch(event.target.value)
    if(search.length>0)
      handleSearch(search);
    else
    setSearchResults([]);
  }
  const handleSearch = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.Bname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
    console.log(filteredData); // or update state, etc.
  };
  const handleInputFocus = () => {
    setShowDiv(true);
  };

  const handleInputBlur = () => {
    setShowDiv(false);
  };

  return (
    <div>
    <Navbar  expand="lg" style={{padding:"1%" ,background:"#455d7a "}}>
      <Navbar.Brand href="#home"><img src={logo} style={{width:"45px"}} ></img><b style={{color:"white"}}>Employee Management System</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>

   { showDiv &&<div className="list-container">
    <ul className="scrollable-list" style={{background:"white",zIndex:"1"}}>
        {searchResults.map((item) => (
          <li key={item.Bid}>{item.Bname}</li>
        ))}
      </ul>
      </div>}
    </div>
  );
}

export default CustomNavbar;
