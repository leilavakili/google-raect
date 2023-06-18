import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import logo from './google.png';


function App() {
  return (
    <div className="App">
    <Navbar />
    <img src={logo} className="App-logo" alt="logo"></img>
    </div>
  );
}

export default App;
