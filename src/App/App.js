import './App.scss';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import RouterTest from '../Components/RouterTest';
import RouterTest2 from '../Components/RouterTest2';


const App = () => {
  return (
    <div className="App">
      <h1> Oscar Cortez Barrientos</h1>
      <Routes>
        <Route path="/" element={<RouterTest />} />
        <Route path="test" element={<RouterTest2 />} />
      </Routes>
    </div>
  )
}

export default App;
