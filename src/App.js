import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allexercise from './component/allexercise';
import Equipment from './component/equipment';
import Muscles from './component/muscles';
import Navbar from './component/navbar';
import Bodyparts from './component/bodyparts';
import Home from './component/home';
import { Search, data } from './api/context';
import Fetchdata from './api/fetchdata';
const App = () => {
  const { search, setsearch } = useState("back");
  console.log(search)
  
 
  return (
    // <data.Provider value={{ allexercise }}>
      <Search.Provider value={{ search, setsearch }}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bodyparts" element={<Bodyparts />} />
              <Route path="/exercises" element={<Allexercise />} />
              <Route path="/equipments" element={<Equipment />} />
              <Route path="/target muscles" element={<Muscles />} />
            </Routes>
          </div>
        </Router></Search.Provider>)
};

export default App;
