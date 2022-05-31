import React from 'react';
import '../Nav/Nav.scss';
import MenuItems from '../Nav/MenuItems';


const Nav = () => {

  return (
    <nav className="navBarItems">
      <h1 className="navBar-logo">Navbar Logo <i class="fa-solid fa-code"></i> </h1>
      <div className="menu-icon">
      </div>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav;