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
    <div className="container">
        <div className="text-center">
            {search[1]?<> <h2>showing results</h2></>:<></>}
           
        </div>
            <div className="d-flex flex-wrap ">
                {search.slice(pre, next).map(item => {
                    return <div className=" w-50 btn border-0 justify-content-center">
                        <img src={item.gifUrl} className="img-fluid" alt="gif" />
                        <div className="d-flex flex-wrap">
                            <h5 className="m-2  m-auto rounded border h6 border-2 p-1 border-dark bg-light">{item.bodyPart}</h5>
                            <label className=" m-auto rounded h6 border border-2 p-1 border-dark">{item.target}</label>
                        </div>

                        <label className="m-2 border-bottom border-3 py-3 border-danger rounded "><Link to={`/exercises/${item.id}`}>{item.name}</Link></label>
                    </div>
                })}
            </div>
           {search[1]?<><ul className="pagination justify-content-center">
                <li className="page-item m-2">
                    {pre <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link" onClick={() => {
                        setpre(pre - n); setnext(next - n);
                    }} ><i class="bi bi-arrow-left "></i></button>}

                </li>
                <li className="page-item m-2">
                    {next > search.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link" onClick={() => {
                        setpre(pre + n); setnext(next + n);
                    }}><i class="bi bi-arrow-right"></i></button>}
                </li>
            </ul></>:<></>}
            
        </div>

  )
}
