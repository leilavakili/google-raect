import React, { Component } from 'react'
import "./Navbar.css";
import menu from './menu.jpg';

class Navbar extends Component{
  render(){
    return(
      <div className="Navbar">
      <nav>
            <ul>
                <li ><a href="https://mail.google.com">Gmail</a></li>
                <li ><a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">Images</a></li>
                <li ><img src={menu} className="menu" alt="menu"/></li>
                <li ><button>sign in</button></li>
           </ul>
      </nav>
      </div>
    )
  }
}
export default Navbar