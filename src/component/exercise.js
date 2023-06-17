import React, { useContext, useEffect, useState } from 'react'
import Fetchdata from '../api/fetchdata';
const Exercise = (props) => {
    const [searchedexercise, setsearchedexercise] = useState(props.exercise)
    const [data1, setdata1] = useState([]);
    const [data, setdata] = useState([{searchedexercise}]);
    const [data2, setdata2] = useState([]);
    const [pre1, setpre1] = useState(0);
    const [pre2, setpre2] = useState(0);
    const [next1, setnext1] = useState(2);
    const [next2, setnext2] = useState(2);
    const similar_target_exercise_list = 'https://exercisedb.p.rapidapi.com/exercises/target/biceps';
    const similar_equipment_exercise_list = 'https://exercisedb.p.rapidapi.com/exercises/equipment/band';
    useEffect(()=>{
        setsearchedexercise(props.exercise);

    },[props.exercise])
    useEffect(() => {

        const fetch = async () => {
            const data1 = await Fetchdata(similar_target_exercise_list);
            const data2 = await Fetchdata(similar_equipment_exercise_list);
            setdata1(data1);
            setdata2(data2);
        }
        fetch();
    }, [])
    
    return (
        <>
            <div className="container row">
                <div className="img col">
                    <img src={searchedexercise.gifUrl} alt="net err" />
                </div>
                <div className="container col">
                    <h2>{searchedexercise.name}</h2>
                    <p className="h5">exercise keep you strong {searchedexercise.name} is one of the best exercise to target your {searchedexercise.target} it will help you to improve your mood and energy </p>
                    <div className="d-flex">
                        <label>{searchedexercise.target}</label>

                    </div>
                    <div className="d-flex">
                        <label>{searchedexercise.muscles}</label></div>
                    <div className="d-flex">
                        <label>{searchedexercise.equipment}</label></div>
                </div>
                <div>
                    <h1>similar target muscles exercise</h1>
                    <div className="row">
                        {data1.slice(pre1, next1).map(item => {
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
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                {pre1 <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link" onClick={() => {
                                    setpre1(pre1 - 2); setnext1(next1 - 2);
                                }} ><i class="bi bi-arrow-left "></i></button>}

                            </li>

                            <li className="page-item">
                                {next1 > data1.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link" onClick={() => {
                                    setpre1(pre1 +2); setnext1(next1 +2);
                                }}><i class="bi bi-arrow-right"></i></button>}
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <h1>similar equipments exercise</h1>
                    {data2.slice(pre2, next2).map(item => {
                        return <div onClick={() => {
                            setsearchedexercise(item);
                            console.log(searchedexercise)}} className=" w-50 btn border-0 justify-content-center">
                            <img src={item.gifUrl} className="img-fluid" alt="gif" />
                            <div className="d-flex flex-wrap">
                                <h5 className="m-2  m-auto rounded border h6 border-2 p-1 border-dark bg-light">{item.bodyPart}</h5>
                                <label className=" m-auto rounded h6 border border-2 p-1 border-dark">{item.target}</label>
                            </div>

                            <label className="m-2 border-bottom border-3 py-3 border-danger rounded ">{item.name}</label>
                        </div> 
                    })}
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            {pre2 <= 0 ? <button className="page-link disabled"><i class="bi bi-arrow-left "></i></button> : <button className="page-link" onClick={() => {
                                setpre2(pre2 - 2); setnext2(next2 - 2);
                            }} ><i class="bi bi-arrow-left "></i></button>}

                        </li>

                        <li className="page-item">
                            {next2 > data2.length ? <button className="page-link disabled" ><i class="bi bi-arrow-right"></i></button> : <button className="page-link" onClick={() => {
                                setpre2(pre2 +2); setnext2(next2 +2);
                            }}><i class="bi bi-arrow-right"></i></button>}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Exercise;
