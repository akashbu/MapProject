import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ShortestPath from './components/ShortestPath/ShortestPath';
import Home from './components/Home/Home'
import About from './components/About/About'
import Guide from './components/Guide/Guide'
import Blockers from './components/Blockers/Blockers'

function App() { 
  return ( 
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home/>} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/guide' element={<Guide />} /> 
        <Route path='/blockers' element={<Blockers />} /> 
        <Route path='/maps' element={<ShortestPath />} /> 
      </Routes> 
    </Router> 
  ); 
} 

export default App; 
