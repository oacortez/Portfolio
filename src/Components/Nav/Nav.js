import React from 'react';
import '../Nav/Nav.scss';

const Nav = () => {
  return (
    <div>
      <h2>NavBar Component</h2>
      <>
      <nav>
      <a href="#home" className="projects-btn">Oscar C</a>
      <a href="#aboutMe" className="projects-btn">About Me</a>
      <a href="#projects" className="projects-btn">Projects</a>
      <a href="#contact" className="projects-btn">Contact Me</a>
      </nav>
    </>
    </div>
  )
}

export default Nav;