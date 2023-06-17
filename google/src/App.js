import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import logo from './google.png';


function App() {
  return (
    <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
    <Navbar />
    </div>
  );
}

export default App;
