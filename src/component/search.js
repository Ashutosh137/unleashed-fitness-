import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Search = (props) => {
    const n = props.n;
    const [pre, setpre] = useState(0);
    const [next, setnext] = useState(n);
    const data = props.exercise;
    const [search, setsearch] = useState([]);

    useEffect(() => {
        setsearch(data);
    }, [data])

    return (
        <div className="container bg-light text-responsive text-capitalize">
            <div className="text-center py-3">
                {search[0] ? <> <h2>showing results {search.length-1}</h2></> : <></>}

            </div>
            <div className="d-flex flex-wrap border-bottom border-3 py-2 border-danger rounded ">
                {search.slice(pre, next).map(item => {

                    return <Link className='text-dark w-50 text-capitalize curser-pointer "w-50 my-3 btn p-3  shadow-sm border-bottom border-3 text-decoration-none' to={`/exercises/${item.id}`}>
                        <img src={item.gifUrl} className="img-fluid rounded" alt="gif" />
                        <div className="d-flex mt-4 mb-2 flex-wrap  text-responsive">
                            <button className="m-2 p-1 text-responsive text-capitalize m-auto rounded border px-3 border-2  border-dark bg-light">{item.bodyPart}</button>
                            <button className=" m-auto my-2 text-capitalize rounded border border-2 px-3 p-1 border-dark bg-light">{item.target}</button>
                        </div>
                        <button className="text-center text-capitalize text-sm rounded p-2 m-auto h5">{item.name}</button>
                    </Link>
                })}
            </div>
            <div className="w-100 my-5">
            {search[0] ? <><ul className='pagination width px-2 m-auto mb-3 border-2 border-danger border rounded justify-content-center'>
                <li className="page-item m-2 ">
                    {pre <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link " onClick={() => {
                        setpre(pre - n); setnext(next - n);
                    }} ><i class="bi bi-arrow-left "></i></button>}

                </li>
                <li className="page-item m-2">
                    {next > search.length-1 ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link text-responsive" onClick={() => {
                        setpre(pre + n); setnext(next + n);
                    }}><i class="bi bi-arrow-right"></i></button>}
                </li>
            </ul></> : <></>}
            </div>

        </div>

    )
}
