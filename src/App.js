import logo from './logo.svg';
import LoginForm from "./Components/login-form"
import './App.css';
import RegisterForm from './Components/register-form';
import CardView from './Components/card-view';
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="RegisterForm" element={<RegisterForm />} />
        <Route path="CardView" element={<CardView/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
