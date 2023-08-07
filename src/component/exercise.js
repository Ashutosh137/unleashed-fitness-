import React, { useEffect, useState } from 'react'
import Fetchdata from '../api/fetchdata';
import { useParams } from 'react-router-dom';
import { Search } from './search';

const Exercise = () => {
    var { id } = useParams();
    if (!id) {
        id = "0007";
    };
    const [exercise, setexercise] = useState([]);
    const [similar_target, setsimilar_target] = useState([]);
    const [similar_equipment, setsimilar_equipment] = useState([]);
    const exerciseurl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

    useEffect(() => {
        const fetch = async () => {
            const exercise1 = await Fetchdata(exerciseurl);
            await setexercise(exercise1);
            const similar_target_exercise_list = `https://exercisedb.p.rapidapi.com/exercises/target/${exercise1.target}`;
            const similar_equipment_exercise_list = `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise1.equipment}`;
            const similar_target = await Fetchdata(similar_target_exercise_list);
            const similar_equipment = await Fetchdata(similar_equipment_exercise_list);
            setsimilar_target(similar_target);
            setsimilar_equipment(similar_equipment);
        }
        fetch();

    }, [exerciseurl])

    return (
        <>
            <div className="container bg-light text-capitalize my-2">
                <div className="text-center h3 py-5">
                    <h3 className='h4 fw-bold border-bottom border-1 border-dark py-2'>{exercise.name}</h3>
                </div>
                <div className="d-flex flex-wrap m-auto my-4">
                    <div className="w-50 m-auto px-3">
                        <img className='rounded img-fluid' src={exercise.gifUrl} alt="net err" />
                    </div>
                    <div className="w-50 px-2 ">
                        <h2>{exercise.name}</h2>
                        <p className=" mx-1 text-responsive">exercise keep you strong , {exercise.name} is one of the best exercise to target your {exercise.bodyPart} it will help you to improve your mood and energy </p>
                        <div className="d-flex m-2">
                            <h5 className='mx-1 h4'>target</h5>
                            <label className='text-responsive mx-1  border-bottom'>{exercise.bodyPart}</label>
                        </div>
                        <div className="d-flex m-2">
                            <h5 className='mx-1 h4'>muscles</h5>
                            <label className=' mx-1 border-bottom text-responsive '>{exercise.target}</label></div>
                        <div className="d-flex m-2">
                            <h5 className='mx-1 h4'>equipment used</h5>
                            <label className=' mx-1 text-responsive'>{exercise.equipment}</label></div>
                    </div>
                </div>
                <div className='my-2 container'>
                    <h1 className=' my-2 border-2 border-bottom border-danger'>similar target muscles exercise</h1>
                    <div className="container">
                        <Search exercise={similar_target} n={2} />
                    </div>

                </div>
                <div className='my-2 container'>
                    <h1 className=' my-2 border-2 border-bottom border-danger'>similar equipments exercise</h1>
                    <div className="container">
                        <Search exercise={similar_equipment} n={2} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exercise;
