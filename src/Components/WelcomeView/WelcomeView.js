import React from 'react';
import '../WelcomeView/WelcomeView.scss';
import { Link } from "react-router-dom";
// import Nav from '../Nav/Nav';


const WelcomeView = () => {
  return (
    <section id="aboutMe" className="landing-page-container">
      {/* <Nav /> */}
      <h1 className="name"> Oscar Cortez Barrientos </h1>
      {/* <nav> */}
        {/* <Link to="/aboutMe">About Me</Link> */}
      {/* </nav> */}
    </section>
  )
}

export default WelcomeView;
