import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export const Search = (props) => {
    const n=props.n;
    const [pre, setpre] = useState(0);
    const [next, setnext] = useState(n);
    const data=props.exercise;
    const [search, setsearch] = useState([]);

    useEffect(()=>{
        setsearch(data);
    },[data])

  return (
    <div className="container text-capitalize">
        <div className="text-center">
            {search[1]?<> <h2>showing results</h2></>:<></>}
           
        </div>
            <div className="d-flex flex-wrap border-bottom  border-3 py-2 border-danger rounded ">
                {search.slice(pre, next).map(item => {
                    return <div className=" w-50 my-3 btn text-capitalize shadow-sm border-bottom border-3">
                        <img src={item.gifUrl} className="img-fluid rounded" alt="gif" />
                        <div className="d-flex my-4 flex-wrap">
                            <h5 className="m-2 p-1  m-auto rounded border h5 px-3 border-2  border-dark bg-light">{item.bodyPart}</h5>
                            <label className=" m-auto rounded h5 border border-2 px-3 p-1 border-dark bg-light">{item.target}</label>
                        </div>

                        <label className="text-center m-auto h5"><Link className='text-dark text-decoration-none' to={`/exercises/${item.id}`}>{item.name}</Link></label>
                    </div>
                })}
            </div>
           {search[1]?<><ul className="pagination justify-content-center">
                <li className="page-item m-3">
                    {pre <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link" onClick={() => {
                        setpre(pre - n); setnext(next - n);
                    }} ><i class="bi bi-arrow-left "></i></button>}

                </li>
                <li className="page-item m-3">
                    {next > search.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link" onClick={() => {
                        setpre(pre + n); setnext(next + n);
                    }}><i class="bi bi-arrow-right"></i></button>}
                </li>
            </ul></>:<></>}
            
        </div>

  )
}
