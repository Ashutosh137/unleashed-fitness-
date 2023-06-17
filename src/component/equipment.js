import React, { useState } from 'react';
import Fetchdata from '../api/fetchdata';
const Equipment = () => {
    const equipment = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList'
    const [data, setdata] = useState([]);
    const fetch = async () => {
        const data = await Fetchdata(equipment).catch((err) => { console.log(err) });
        setdata(data);
    }
    return (
        <div className='container page font-weight-bold my-5'>
            <button onClick={fetch}>equipments</button>
            <div className=" text-capitalize row container" >
                {data.map((item) => {
                    return <div className="text-center col font-weight-bolder container">
                        <img className=' w-25 img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Robby_Robinson_Wiki.jpg" alt="" />
                        <p className="p-2 h2">{item}</p>
                    </div>
                })}
            </div>
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>

        </div>
    )
}

export default Equipment;
