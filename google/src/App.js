import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import logo from './google.png';


function App() {
  return (
    <div className="App">
    <Navbar />
    <body>
    <section className="section">
    <img src={logo} className="App-logo" alt="logo"></img>
    <form>
    <br></br>
    <div class="search-b">

    <img alt="magnifier" src="img/magnifier glass.png" class="magnifier"/>
    <input type="text" class="search-input"/>
    <img alt="mic" src="img/mic.png" class="mic-icon" />
    <img alt="lens" src="img/lens.png" class="lens-icon"/>
    <input type="submit" class="search-botton" value="Google Search"/>
    <input type="submit" class="search-botton" value="I'm Feeling Lucky"/>

</div>
    </form>
    </section>
    </body>
    </div>
    

  );
}

export default App;
