import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import'./Navbar.css'
import { Button } from '../Button'

class Navbar extends Component{
  render(){
    return(
      <nav className="NavbarItems">

          <div className="navbar-menu">menu</div>
          <ul className="nav-menu">
           {MenuItems.map((item, index)=>{
             return(
              <li key={index}><a className={Items.cName} href={item.URL}>{item.title}</a></li>
             )
           })}
          
          </ul>
          <Button>Sign</Button>
      </nav>
    )
  }
}
export default Navbar