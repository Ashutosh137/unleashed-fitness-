import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allexercise from './component/allexercise';
import Navbar from './component/navbar';
import Home from './component/home';
import Exercise from './component/exercise';
import { Fetchdata } from './api/fetchdata';
import MyContext from './api/context';
import './app.css'
const App = () => {
  const [load, setload] = useState(null)
  const [data, setdata] = useState({
    bodyPartList: [],
    targetList: [],
    equipmentList: [],
  })

  useEffect(async () => {
    const fetchingdata = async () => {
      setload(true);
      const dataa = await Fetchdata();
      await setdata(dataa)
    }
    await fetchingdata()
    setload(false)
  }, []);
  return (
    <Router>
      <MyContext.Provider value={{ setdata, data }}>
        {load? <div className="loader"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db4c8d09-e9cf-457e-bf26-81f68fd8c9c8/dbxggo5-bc363337-2b7d-479c-9641-3d0f801815cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiNGM4ZDA5LWU5Y2YtNDU3ZS1iZjI2LTgxZjY4ZmQ4YzljOFwvZGJ4Z2dvNS1iYzM2MzMzNy0yYjdkLTQ3OWMtOTY0MS0zZDBmODAxODE1Y2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xvK65ukDA9Hw4zCKUP3o18rhvgRXtu0kcl8F2VRSGb4" /><label htmlFor="">loading...</label></div>:<div className="bg py-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allexercises" Component={Allexercise} />
            <Route path="exercises/:id" Component={Exercise} />
          </Routes>
        </div>}
      </MyContext.Provider>


    </Router>
  )
};

export default App;
