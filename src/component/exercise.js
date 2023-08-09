import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Search } from './search';
import MyContext from '../api/context';

const Exercise = () => {
    var { id } = useParams();
    if (!id) {
        id = "0007";
    };
    const { data: { allexercise }, favourite, setfavourite } = useContext(MyContext)
    const [exercise, setexercise] = useState([]);
    const [similar_target, setsimilar_target] = useState([]);
    const [similar_equipment, setsimilar_equipment] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const exercisedata = await allexercise.filter((item) => {
                return item.id === id
            });
            setexercise(exercisedata[0])

            const similar_equipment = await allexercise.filter((item) => {
                return item.equipment === exercise.equipment
            });
            const similar_target = await allexercise.filter((item) => {
                return item.target === exercise.target
            });
            setsimilar_equipment(similar_equipment)
            setsimilar_target(similar_target)
        }
        fetch();
    }, [id])

    console.log(favourite)

    return (
        <div className="container text-responsive rounded py-5 bg-light text-capitalize m-auto">
            <div className="text-center h3 py-3">
                <h3 className='h4 fw-bold border-bottom border-1  border-dark py-3'>{exercise.name}</h3>
            </div>

            <div className="d-flex flex-wrap m-auto">
                <div className="w-50 m-auto px-3">
                    <img className='rounded img-fluid' src={exercise.gifUrl} alt="net err" />
                </div>
                <div className="w-50 px-4 ">
                    <h2 className=' fw-bold'>{exercise.name}</h2>

                    <p className=" mx-1 ">exercise keep you strong , {exercise.name} is one of the best exercise to target your {exercise.bodyPart} it will help you to improve your mood and energy </p>
                    <div className="d-flex">
                        <h5 className='mx-1'>target:</h5>
                        <label className=' mx-1'>{exercise.target}</label>
                    </div>
                    <div className="d-flex">
                        <h5 className='mx-1'>muscles:</h5>
                        <label className=' mx-1  '>{exercise.bodyPart}</label></div>
                    <div className="d-flex">
                        <h5 className='mx-1'>equipment used:</h5>
                        <label className='mx-1 '>{exercise.equipment}</label></div>
                </div>
            </div>
            {favourite.includes(id) ? <i className="bi bi-bookmark-heart-fill relative" onClick={() => {
                setfavourite(favourite.filter(item => item !== id));
                
            }}></i> : <i className="bi bi-bookmark-heart relative" onClick={() => {
                setfavourite([...favourite, id])
            }}></i>}

            <div className='container mt-5'>
                <h1 className=' my-2 border-2 border-bottom border-danger'>similar target muscles exercise</h1>
                <Search exercise={similar_target} n={2} />
                <h1 className='my-2 border-2 border-bottom border-danger'>similar equipments exercise</h1>
                <Search exercise={similar_equipment} n={2} />
            </div>
        </div>
    )
}

export default Exercise;
