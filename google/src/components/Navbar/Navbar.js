import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import'./Navbar.css'
import { Button } from '../Button'

class Navbar extends Component{

}
  render(){
    return(
      <nav className="NavbarItems">

          <div className="menu-icon">
          <a ></a>
          </div>
            <ul className="nav-menu">
              {MenuItems.map((item, index)=>{
                return(
                <li key={index}>
                  <a className={item.cName} href={item.URL}>{item.title}</a>
                </li>
                )
           })}
           </ul>
          <Button>Sign in</Button>
      </nav>
    )
  }
}
export default Navbar