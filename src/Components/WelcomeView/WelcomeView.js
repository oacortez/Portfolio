import React from 'react';
import '../WelcomeView/WelcomeView.scss';
import { Link } from "react-router-dom";

const WelcomeView = () => {
  return (
    <div className="landing-page-container">
      <h1 className="name"> Oscar Cortez Barrientos </h1>
      {/* <nav> */}
        {/* <Link to="/aboutMe">About Me</Link> */}
      {/* </nav> */}
    </div>
  )
}

export default WelcomeView;
