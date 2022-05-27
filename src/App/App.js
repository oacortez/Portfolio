import './App.scss';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import WelcomeView from '../Components/WelcomeView/WelcomeView';
import Nav from '../Components/Nav/Nav';


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<WelcomeView />} />
      </Routes>
    </div>
  )
}

export default App;
