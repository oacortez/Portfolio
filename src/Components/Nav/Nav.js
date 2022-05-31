import React from 'react';
import '../Nav/Nav.scss';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h2>NavBar Component</h2>
      <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2 className="home-title">Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/aboutMe">
              <h2 className="about-me">About Me</h2>
            </Link>
          </li>
          {/* <li>
            <Link to={`/posts/${_id}`}>
              <h2 className="post-title">{title}</h2>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
    </div>
  )
}

export default Nav;