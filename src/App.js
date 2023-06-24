import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allexercise from './component/allexercise';
import Navbar from './component/navbar';
import Home from './component/home';
import Exercise from './component/exercise';
const App = () => {

  return (
    <Router>
      <div className="bg py-4">
        
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allexercises" Component={Allexercise} />
        <Route path="exercises/:id" Component={Exercise} />
      </Routes>
      </div>
    </Router>
  )
};

export default App;
