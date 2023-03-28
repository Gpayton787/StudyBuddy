
import './App.css';
import rick from './assets/rickroll.gif'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/logo.PNG'
import Home from './components/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <div id="navigation">
          <h1>StudyBuddy <img src={logo} alt="logo" width= "80px" /></h1>
          <div className="navbar">
            hello
          </div>
        </div>
        <div id="content">
          <Routes>
            <Route path='/StudyBuddy/' element={<Home />} /> 
          </Routes>
      
        </div>
      </div>
    </Router>
  );
}

export default App;
