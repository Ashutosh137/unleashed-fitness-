import React, { useContext, useEffect, useState } from 'react';
import { Search } from './search';
import MyContext from '../api/context';
import Bodyparts from './bodyparts';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const Allexercise = () => {
    const [data, setdata] = useState([])
    const { data: { allexercise }, data: { targetList }, data: { equipmentList }, data: { bodyPartList } } = useContext(MyContext)

    useEffect(() => {
        const fetch = async () => {
            setdata(allexercise);
        }
        fetch();
    }, [])

    const filter = async (bodyPart, equipment, target) => {
        const searchdataall = await allexercise.filter((item) => {
            return (item.equipment?.toLowerCase().includes(equipment) && item.target?.toLowerCase().includes(target) && item.bodyPart?.toLowerCase().includes(bodyPart))
        });
        setdata(searchdataall);
        console.log(searchdataall)
    }
    return (
        <div className='container rounded text-responsive bg-light'>
            <h4 className='text-center text-capitalize bg-light p-5 text-suceess'>all exercise</h4>
            <button className="btn btn-primary text-capitalize" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter">
                fliter exercise
            </button>
            <div className="">
                <div className='w-100'>
                    <div className=" p-5">
                        {data[0] ? <Search exercise={data} n={6} /> : <h1 className='text-center text-capitalize bg-light p-5 text-suceess'>no result found</h1>}
                    </div>
                </div>

            </div>

            <div className="offcanvas offcanvas-end" id="filter">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Filter</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body overflow-scroll">
                    <form className='w-100  text-capitalize absolute-filter rounded ' onSubmit={(e) => {
                        e.preventDefault()
                        const bodyParts = document.querySelectorAll('#bodyparts:checked');
                        const equipment = document.querySelectorAll('#equipment:checked');
                        const target = document.querySelectorAll('#target:checked');
                        const bodyPartlabels = Array.from(bodyParts).map((checkbox) => checkbox.nextElementSibling.innerText.toLowerCase());
                        const equipmentlabels = Array.from(equipment).map((checkbox) => checkbox.nextElementSibling.innerText.toLowerCase());
                        const targetlabels = Array.from(target).map((checkbox) => checkbox.nextElementSibling.innerText.toLowerCase());
                        filter(bodyPartlabels, equipmentlabels, targetlabels);
                    }}>
                        <h3 className='text-center my-3'>filter</h3>
                        <details className='list-none border border-2 border-danger m-2  rounded p-2 bg-light'>
                            <summary className='border-bottom border-2 border-danger mb-2'><h5>according to bodyparts</h5></summary>
                            {bodyPartList.map((item) => {
                                return <><div className="d-flex">
                                    <input className='btn curser-pointer mx-2 h5' type="checkbox" id='bodyparts' /><label className='h5' htmlFor="">{item}</label>
                                </div></>
                            })}
                        </details>
                        <details className='list-none border border-2 m-2 border-danger rounded p-2 bg-light'>
                            <summary className='border-bottom border-2 border-danger mb-2'><h5>according to equipment</h5></summary>
                            {equipmentList.map((item) => {
                                return <><div className="d-flex">
                                    <input type="checkbox" className='btn curser-pointer mx-2 h5' id='equipment' /><label className='h5' htmlFor="">{item}</label>
                                </div></>
                            })}
                        </details>
                        <details className='list-none border border-2 m-2 border-danger  rounded p-2 bg-light'>
                            <summary className='border-bottom border-2 border-danger mb-2'><h5>according to target muscles</h5></summary>

                            {targetList.map((item) => {
                                return <><div className="d-flex">
                                    <input type="checkbox" className='btn curser-pointer mx-2 h5' id='target' /><label className='h5' htmlFor="">{item}</label>
                                </div></>
                            })}
                        </details>
                        <div className="d-flex justify-content-center my-3 curser-pointer">
                            <button type='reset' className='btn mx-1 text-capitalize fw-semibold  btn-danger'>reset</button>
                            <button className='btn mx-1 text-capitalize fw-semibold  btn-danger'  data-bs-dismiss="offcanvas">submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Allexercise
