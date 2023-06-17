import React, { useContext, useEffect, useState } from 'react'
import Fetchdata from '../api/fetchdata';
import Exercise from './exercise';

const Bodyparts = () => {

    const bodyparts = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const [data, setdata] = useState([]);
    const [pre1, setpre1] = useState(0);
    const [pre, setpre] = useState(0);
    const [next1, setnext1] = useState(4);
    const [next, setnext] = useState(2);
    const [search, setsearch] = useState([]);


    const [searchedexercise, setsearchedexercise] = useState({});
    useEffect(() => {
        const fetch = async () => {
            const data = await Fetchdata(bodyparts).catch((err) => { console.log(err) });
            setdata(data);
        }
        fetch();

    }, [])
    async function fetch(item) {
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
        const data1 = await Fetchdata(url).catch((err) => { console.log(err) });
        setsearch(data1);
    }

    return (
        <div className='container'>
            <div className="d-flex justify-content-center flex-wrap mx-4" >
                {data.slice(pre1, next1).map((item) => {
                    return <div className="card border-0 w-25" >
                        <img className='col img-fluid mx-auto w-25' src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Robby_Robinson_Wiki.jpg" alt="" />
                        <label onClick={() => { fetch(item) }} className="btn mx-auto fw-bold">{item}</label>
                    </div>

                })}
            </div>
            <ul className="pagination justify-content-center m-2">
                <li className="page-item m-2">
                    {pre1 <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left"></i></button> : <button className="page-link" onClick={() => {
                        setpre1(pre1 - 4); setnext1(next1 - 4);
                    }} ><i class="bi bi-arrow-left "></i></button>}

                </li>
                <li className="page-item m-2">
                    {next1 >= data.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link bg-pri mary" onClick={() => {
                        setpre1(pre1 + 4); setnext1(next1 + 4);
                    }}><i class="bi bi-arrow-right"></i></button>}
                </li>
            </ul>
            <div className="container">
                <div className="d-flex flex-wrap ">
                    {search.slice(pre, next).map(item => {
                        return <div onClick={() => {
                            setsearchedexercise(item);}} className=" w-50 btn border-0 justify-content-center">
                            <img src={item.gifUrl} className="img-fluid" alt="gif" />
                            <div className="d-flex flex-wrap">
                                <h5 className="m-2  m-auto rounded border h6 border-2 p-1 border-dark bg-light">{item.bodyPart}</h5>
                                <label className=" m-auto rounded h6 border border-2 p-1 border-dark">{item.target}</label>
                            </div>

                            <label className="m-2 border-bottom border-3 py-3 border-danger rounded ">{item.name}</label>
                        </div> 
                    })}
                </div>
                <ul className="pagination justify-content-center">
                    <li className="page-item m-2">
                        {pre <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link" onClick={() => {
                            setpre(pre - 2); setnext(next - 2);
                        }} ><i class="bi bi-arrow-left "></i></button>}

                    </li>
                    <li className="page-item m-2">
                        {next > search.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link" onClick={() => {
                            setpre(pre + 2); setnext(next + 2);
                        }}><i class="bi bi-arrow-right"></i></button>}
                    </li>
                </ul>
            </div>

            <div className="container">
                {<Exercise exercise={searchedexercise} />}
            </div>

        </div >
    )
};

export default Bodyparts;
