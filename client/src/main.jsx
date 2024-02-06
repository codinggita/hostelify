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
import BookNow from './components/BookNow.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<div><Navbar/></div>

<Routes>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />  
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/booking" element={<BookNow/>} />
</Routes>
<Footer/>
</BrowserRouter>
);