import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import logo from './google.png';
import magnifier from './magnifier glass.png'
import mic from './mic.png';
import lens from './lens.png';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <body>
    <section className="section">
    <img src={logo} className="App-logo" alt="logo"/>
    <form>
    <br></br>
    <div class="search-b">

    <img alt="magnifier" src={magnifier} class="magnifier"/>
    <input type="text" class="search-input"/>
    <img alt="mic" src={mic} class="mic-icon" />
    <img alt="lens" src={lens} class="lens-icon"/>
    <input type="submit" class="search-botton" value="Google Search"/>
    <input type="submit" class="search-botton" value="I'm Feeling Lucky"/>

</div>
    </form>
    <Footer />
    </section>
    </body>
    </div>
    

  );
}

export default App;
