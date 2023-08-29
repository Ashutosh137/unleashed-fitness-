import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Search } from './search';
import MyContext from '../api/context';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Exercise = () => {
    var { id } = useParams();
    const { data: { allexercise }, favourite, setfavourite, toggleload } = useContext(MyContext)
    const [exercise, setexercise] = useState([]);
    const [similar_target, setsimilar_target] = useState([]);
    const [similar_equipment, setsimilar_equipment] = useState([]);
    const [skeleton, setskeleton] = useState(true)

    useEffect(() => {
        const fetchExerciseData = async () => {
            toggleload();

            try {
                const exercisedata = allexercise.find(item => item.id === id);
                const similar_equipment1 = allexercise.filter(item => item.equipment === exercisedata.equipment);
                const similar_target1 = allexercise.filter(item => item.target === exercisedata.target);
                setexercise(exercisedata);
                setsimilar_equipment(similar_equipment1);
                setsimilar_target(similar_target1);

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                toggleload();
            }
        };

        fetchExerciseData();
    }, [id]);


    return (
        <div className="container p-5 text-responsive rounded py-5 bg-light text-capitalize m-auto">
            <div className="text-center h3 py-3">
                <h3 className='h4 fw-bold border-bottom border-1  border-dark py-3'>{exercise.name}</h3>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                <div className="w-50 px-3">
                    {skeleton && <Skeleton count={10} />}
                    <img style={{ display: skeleton ? 'none' : 'block' }} onLoadCapture={() => {
                        setskeleton(false)
                    }}
                        src={exercise.gifUrl} className="img-fluid shadow-1 m-auto rounded" alt="gif" />
                </div>
                <div className="w-50 px-4 ">
                    <h2 className=' fw-bold'>{exercise.name || <Skeleton />}</h2>

                    <p className=" mx-1 ">exercise keep you strong , {exercise.name || <Skeleton />} is one of the best exercise to target your {exercise.bodyPart} it will help you to improve your mood and energy </p>
                    <div className="d-flex">
                        <h5 className='mx-1'>target:</h5>
                        <label className=' mx-1'>{exercise.target || <Skeleton />}</label>
                    </div>
                    <div className="d-flex">
                        <h5 className='mx-1'>muscles:</h5>
                        <label className=' mx-1  '>{exercise.bodyPart || <Skeleton />}</label></div>
                    <div className="d-flex">
                        <h5 className='mx-1'>equipment used:</h5>
                        <label className='mx-1 '>{exercise.equipment || <Skeleton />}</label></div>
                </div>
            </div>
            {favourite.includes(id) ? <i className="bi bi-bookmark-heart-fill relative" onClick={() => {
                setfavourite(favourite.filter(item => item !== id));

            }}></i> : <i className="bi bi-bookmark-heart relative" onClick={() => {
                setfavourite([...favourite, id])
            }}></i>}

            <div className='container mt-5'>
                <h1 className=' m-3 border-2 border-bottom border-danger'>similar target muscles exercise</h1>
                <Search exercise={similar_target} n={2} />
                <h1 className='m-3 border-2 border-bottom border-danger'>similar equipments exercise</h1>
                <Search exercise={similar_equipment} n={2} />
            </div>
        </div>
    )
}

export default Exercise;
