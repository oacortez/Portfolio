import './App.scss';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import WelcomeView from '../Components/WelcomeView/WelcomeView';
import Nav from '../Components/Nav/Nav';
import AboutMe from '../Components/AboutMe/AboutMe';
import ProjectsView from '../Components/Projects/ProjectsView';
import Contact from '../Components/Info/Contact';


const App = () => {

  return (
    <main>
      <Nav />
      <WelcomeView />
      <AboutMe />
      <ProjectsView />
      <Contact />
    </main>
  )
}

export default App;
