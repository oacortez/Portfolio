import './App.scss';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import WelcomeView from '../Components/WelcomeView/WelcomeView';
import Nav from '../Components/Nav/Nav';
import AboutMe from '../Components/AboutMe/AboutMe';


const App = () => {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        {/* <Nav /> */}
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default App;
