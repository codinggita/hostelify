import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<div><Navbar/></div>

<Routes>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />  
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
</Routes>
<Footer/>
</BrowserRouter>
);