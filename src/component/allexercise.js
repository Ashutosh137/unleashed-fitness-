import React, { useEffect, useState } from 'react';
import Fetchdata from '../api/fetchdata';
import { Search } from './search';
const Allexercise = () => {
    const [data, setdata] = useState([])
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    useEffect(() => {
        const fetch = async () => {
            const data = await Fetchdata(url).catch((err) => { console.log(err) });
            setdata(data);
        }
        fetch();

    }, [])

    return (
        <div className='container'>
            <Search exercise={data} n={10} />
        </div>
    )
}

export default Allexercise
