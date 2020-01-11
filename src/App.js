  
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import MyProfile from './myprofil';
import Home from './home';
import Navbar from './navbar';
import Contact from './contact';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Route path="/profile" component={MyProfile} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  ); 
}

export default App;
