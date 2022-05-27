import React from 'react';
import { Link } from "react-router-dom";

const WelcomeView = () => {
  return (
    <div>
      <h1> Oscar Cortez Barrientos </h1>
      <nav>
        <Link to="/">Welcome View</Link>
      </nav>
    </div>
  )
}

export default WelcomeView;
