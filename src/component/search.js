import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Search = (props) => {
    const n = props.n;
    const [pre, setpre] = useState(0);
    const [next, setnext] = useState(n);
    const data = props.exercise;
    const [search, setsearch] = useState([]);
    const myList = Array.from({ length: search.length / n + 1 }, (_, index) => index);


    useEffect(() => {
        setsearch(data);
    }, [data])

    return (<>
        {search[0] ? <div className="container rounded bg-light py-4 text-responsive text-capitalize">
            <div className="text-center m-auto py-3">
                <h2>showing results :<spanc className='fw-semmibold'>{search.length}</spanc></h2>
            </div>
            <div className="d-flex mb-5 flex-wrap justify-content-around border border-3 shadow p-2 border-danger rounded ">
                {search.slice(pre, next).map(item => {

                    return <Link className='text-dark curser-pointer w-fixed m-3 btn p-3 shadow border-bottom border-3 border-dark text-decoration-none' to={`/exercises/${item.id}`}>
                        <img src={item.gifUrl} className="img-fluid shadow rounded" alt="gif" />
                        <div className="d-flex mt-4 mb-2 flex-wrap  text-responsive">
                            <button className="m-2 btn p-1  text-capitalize m-auto rounded border px-3 border-2 border-dark bg-light">{item.bodyPart}</button>
                            <button className="btn m-auto my-2  text-capitalize rounded border border-2 px-3 p-1 border-dark bg-light">{item.target}</button>
                        </div>
                        <button className="btn text-capitalize text-center btn-secondary rounded p-2 m-auto h5">{item.name}</button>
                    </Link>
                })}
            </div>
            <div className="w-100 m-auto">
                <ul className="pagination width mb-3 overflow-hidden border-2 border-danger border rounded justify-content-center">
                    <li className="page-item m-2">
                        {pre <= 0 ? <button className="page-link disabled"><i className="bi bi-arrow-left"></i></button> : <button className="page-link" onClick={() => {
                            setpre(pre - n); setnext(next - n);
                        }} ><i className="bi bi-arrow-left"></i></button>}
                    </li>
                    <li className='w-100 m-2 overflow-scroll d-flex'>
                        {myList.map((item) => {
                            return <button className="page-link mx-1 curser-pointer rounded text-primary border-0 text-responsive" onClick={() => {
                                setpre(item * n); setnext((item + 1) * n);
                            }}>{item + 1}</button>
                        })}
                    </li>
                    <li className="page-item m-2">
                        {next >= search.length ? <button className="page-link disabled" ><i className="bi bi-arrow-right"></i></button> : <button className="page-link " onClick={() => {
                            setpre(pre + n); setnext(next + n);
                        }}><i className="bi bi-arrow-right"></i></button>}
                    </li>
                </ul>
            </div>
        </div>:<></>}</>)
}
