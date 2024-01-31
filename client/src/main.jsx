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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<div><Navbar/></div>

<Routes>
  <Route path="/navbar" element={<p>hiiiiii</p>} />
  <Route path="/footer" element={<App/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />  
  <Route path="/" element={<Home/>} />
</Routes>
<Footer/>
</BrowserRouter>
);