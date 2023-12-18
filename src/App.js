import React, { useEffect, useState,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allexercise from './component/allexercise';
import Navbar from './component/navbar';
import Home from './component/home';
import Exercise from './component/exercise';
import { Fetchdata } from './api/fetchdata';
import MyContext from './api/context';
import './app.css'
import { Favourite } from './component/favourite';
const App = () => {
  const [load, setload] = useState(false)
  const [load1, setload1] = useState(false)
  const [data, setdata] = useState({
    bodyPartList: [],
    targetList: [],
    equipmentList: [], allexercise: []
  })
  const [favourite, setfavourite] = useState([])

  useEffect(async () => {
    const fetchingdata = async () => {
      setload1(true);
      const dataa = await Fetchdata();

      await setdata(dataa)
    }
    setload1(false)
    await fetchingdata()
  }, []);

  useEffect(() => {
    const fetch = () => {
      const data = localStorage.getItem('favourite')
      if (data == null) {
        localStorage.setItem('favourite', JSON.stringify(favourite))
      }
      else {
        setfavourite(JSON.parse(data))
      }
    }
    fetch()
  }, [])

  // useEffect(()=>{
  //   if(data.bodyPartList == [null] || data.targetList==[null] || data.equipmentList==[null] || data.allexercise==[null]){
  //     setload(true)
  //   }
  //   else{
  //     setload(false)
  //   }
    
  // }, [data])

  useEffect(()=>{
    
  if(data.bodyPartList.lenght==0){
    setload(true)
  }
  else{
    setload(false)
  }

  },[data])


  


  const toggleload = () => {
    setload(prevLoad => !prevLoad);
  }

  return (
    <Router>
      <MyContext.Provider value={{ data, favourite, setfavourite, load, toggleload }}>
        {!load1 ? <div className="loader"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db4c8d09-e9cf-457e-bf26-81f68fd8c9c8/dbxggo5-bc363337-2b7d-479c-9641-3d0f801815cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiNGM4ZDA5LWU5Y2YtNDU3ZS1iZjI2LTgxZjY4ZmQ4YzljOFwvZGJ4Z2dvNS1iYzM2MzMzNy0yYjdkLTQ3OWMtOTY0MS0zZDBmODAxODE1Y2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xvK65ukDA9Hw4zCKUP3o18rhvgRXtu0kcl8F2VRSGb4" /><label htmlFor="">Loading...</label></div> :
          <div className="bg py-2">
            <Navbar />
            {
              load ? <div className='spinner'><img className="spinner" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db4c8d09-e9cf-457e-bf26-81f68fd8c9c8/dbxggo5-bc363337-2b7d-479c-9641-3d0f801815cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiNGM4ZDA5LWU5Y2YtNDU3ZS1iZjI2LTgxZjY4ZmQ4YzljOFwvZGJ4Z2dvNS1iYzM2MzMzNy0yYjdkLTQ3OWMtOTY0MS0zZDBmODAxODE1Y2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xvK65ukDA9Hw4zCKUP3o18rhvgRXtu0kcl8F2VRSGb4" ></img></div> : <></>
            }
            <div className="container-fluid w-100 py-2">

              
            <Suspense fallback={<div className='spinner'><img className="spinner" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db4c8d09-e9cf-457e-bf26-81f68fd8c9c8/dbxggo5-bc363337-2b7d-479c-9641-3d0f801815cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiNGM4ZDA5LWU5Y2YtNDU3ZS1iZjI2LTgxZjY4ZmQ4YzljOFwvZGJ4Z2dvNS1iYzM2MzMzNy0yYjdkLTQ3OWMtOTY0MS0zZDBmODAxODE1Y2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xvK65ukDA9Hw4zCKUP3o18rhvgRXtu0kcl8F2VRSGb4" ></img></div> }>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/allexercises" Component={Allexercise} />
              <Route path="/favourite" Component={Favourite} />
              <Route path="exercises/:id" Component={Exercise} />
            </Routes>
            </Suspense>
           
            </div>
          </div>}
      </MyContext.Provider>


    </Router>
  )
};

export default App;
