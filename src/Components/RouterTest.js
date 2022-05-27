import React from 'react';
import {Link } from "react-router-dom";

const RouterTest = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <Link to="/test">React router test view</Link>
      </nav>
    </div>
  )
}

export default RouterTest;
