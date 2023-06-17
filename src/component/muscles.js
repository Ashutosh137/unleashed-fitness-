import React, { useState } from 'react';
import Fetchdata from '../api/fetchdata';
const Muscles = () => {
    const muscles = 'https://exercisedb.p.rapidapi.com/exercises/targetList';
    const [data, setdata] = useState([]);
    const fetch = async () => {
        const data = await Fetchdata(Muscles).catch((err)=>{console.log(err)});
        setdata(data);
    }
    return (
        <div>
            <button onClick={fetch}>muscles</button>
            <div className=" text-capitalize row mb-3" >
                {data.map((item) => {
                    return <div className="card text-center mb-3 d-flex col">
                        <img className=' w-25 img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Robby_Robinson_Wiki.jpg" alt="" />
                        <h2 className="card-title text-center">{item}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Muscles
