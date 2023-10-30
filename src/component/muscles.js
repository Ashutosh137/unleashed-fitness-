import React, { useState, useContext } from 'react';
import Fetchdata from '../api/fetchdata';
import { Search } from './search';
import MyContext from '../api/context';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Muscles = () => {
    const { data: { targetList } ,toggleload} = useContext(MyContext)

    const [pre1, setpre1] = useState(0);
    const [next1, setnext1] = useState(4);
    const [search, setsearch] = useState([]);
    const myList = Array.from({ length: targetList.length/4 +1 }, (_, index) => index);

    async function fetch(item) {
        toggleload()
        const url = `https://exercisedb.p.rapidapi.com/exercises/target/${item}`;
        const data1 = await Fetchdata(url).catch((err) => { console.log(err) });
        setsearch(data1);
        toggleload()

    }

    return (
        <div className='m-auto bg-light rounded'>
            <div className="d-flex justify-content-center flex-wrap p-3 " >
                {targetList.slice(pre1, next1).map((item, index) => {
                    return <div key={index} className="w-25 my-4 card border-2 p-2" >
                        <img className='img-fluid mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMyQqOKCPUxwvCBKi_WXiiNSnPhJmgoqRDQ&usqp=CAU" alt="" />
                        <button onClick={() => { fetch(item) }} className="text-responsive text-center text-capitalize p-1 border-1 border-danger border">{item||<Skeleton />}</button>
                    </div>

                })}
            </div>
            <div className="w-75 m-auto">
                <ul className="pagination width mb-3 border-2 border-danger border rounded justify-content-center">
                    <li className="page-item m-2">
                        {pre1 <= 0 ? <button className="page-link disabled"><i className="bi bi-arrow-left"></i></button> : <button className="page-link" onClick={() => {
                            setpre1(pre1 - 4); setnext1(next1 - 4);
                        }} ><i className="bi bi-arrow-left"></i></button>}
                    </li>
                    <li className=' m-auto overflow-scroll d-flex'>
                        {myList.map((item,index) => {
                                return <button key={index} className="page-link mx-1 curser-pointer rounded text-primary border-0 text-responsive" onClick={() => {
                                    setpre1(item * 4); setnext1((item + 1) * 4);
                                }}>{item + 1}</button>
                            })}
                    </li>
                    <li className="page-item m-2">
                        {next1 >= targetList.length ? <button className="page-link disabled" ><i className="bi bi-arrow-right"></i></button> : <button className="page-link " onClick={() => {
                            setpre1(pre1 + 4); setnext1(next1 + 4);
                        }}><i className="bi bi-arrow-right"></i></button>}
                    </li>
                </ul>
            </div>
            <div className="container py-1">
                <Search exercise={search} n={2} />
            </div>

        </div >


    )
}

export default Muscles
