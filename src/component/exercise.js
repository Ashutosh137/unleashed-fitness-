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
            <div className="container row">
                <div className="img col">
                    <img src={exercise.gifUrl} alt="net err" />
                </div>
                <div className="container col">
                    <h2>{exercise.name}</h2>
                    <p className="h5">exercise keep you strong {exercise.name} is one of the best exercise to target your {exercise.target} it will help you to improve your mood and energy </p>
                    <div className="d-flex">
                        <label>{exercise.target}</label>

                    </div>
                    <div className="d-flex">
                        <label>{exercise.muscles}</label></div>
                    <div className="d-flex">
                        <label>{exercise.equipment}</label></div>
                </div>
                <div>
                    <h1>similar target muscles exercise</h1>
                    <div className="row">
                        <Search exercise={similar_target}  n={2}/>
                    </div>

                </div>
                <div>
                    <h1>similar equipments exercise</h1>
                </div>
                <div>
                    <Search exercise={similar_equipment}  n={2}/>
                </div>
            </div>
        </>
    )
}

export default Exercise;
