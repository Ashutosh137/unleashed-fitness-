import React, { useState } from 'react'
import Fetchdata from '../api/fetchdata';
import Exercise from './exercise';
const Search = () => {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState('leg');
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}';
    const fetch = async () => {
        console.log(search)
        const data = await Fetchdata(url);
        setdata(data);
    }
    return (
        <div>
            <input type="text" value={search} placeholder='enter any exercise' onChange={(e) => setsearch(e.target.value)} />
            <button onClick={fetch} className='btn btn-primary'>search</button>
            <div className="d-flex flex-wrap">
                {data.map(item => {
                    return <Exercise data={item} />
                })}
            </div>
        </div>
    )
}

export default Search
