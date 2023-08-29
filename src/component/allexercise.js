import React, { useContext, useEffect, useState } from 'react';
import { Search } from './search';
import MyContext from '../api/context';
const Allexercise = () => {
    const [data, setdata] = useState([])
    const { data: { allexercise }, data: { targetList }, data: { equipmentList }, data: { bodyPartList }, toggleload } = useContext(MyContext)

    useEffect(() => {
        const fetch = async () => {
            toggleload()
            setdata(allexercise);
        }
        fetch();
        toggleload()
    }, [])

    const filter = async (bodyPart, equipment, target) => {
        toggleload()
        const searchdataall = await allexercise.filter((item) => {
            console.log(equipment.includes(item.equipment?.toLowerCase()) && target.includes(item.target?.toLowerCase()) && bodyPart.includes(item.bodyPart?.toLowerCase()))
            return (equipment.includes(item.equipment?.toLowerCase()) && target.includes(item.target?.toLowerCase()) && bodyPart.includes(item.bodyPart?.toLowerCase()))
        });
        toggleload()
        setdata(searchdataall);
    }
    return (
        <div className='container rounded text-responsive bg-light'>
            <h4 className='text-center text-capitalize bg-light border-bottom border-1 border-dark p-4 my-5 h1 text-suceess'>all exercise</h4>
            <button className="btn btn-primary text-dark text-capitalize" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter">
                fliter exercise
            </button>
            <div className='w-100'>
                <div className=" p-5">
                    {data[0] ? <Search exercise={data} n={6} /> : <h1 className='text-center text-capitalize bg-light p-5 text-suceess'>no result found</h1>}
                </div>
            </div>

            <div className="offcanvas offcanvas-end" id="filter">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Filter</h1>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="w-100 overflowx-hidden">
                    <form className='w-100 text-capitalize absolute-filter rounded ' onSubmit={(e) => {
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
                            <div className="d-flex flex-column">
                                {bodyPartList.map((item ,index) => {
                                    return <div key={index}>
                                        <input className='btn curser-pointer mx-2 h5' type="checkbox" id='bodyparts' /><label className='h5' htmlFor="">{item}</label>
                                    </div>
                                })}</div>
                        </details>
                        <details className='list-none border border-2 m-2 border-danger rounded p-2 bg-light'>
                            <summary className='border-bottom border-2 border-danger mb-2'><h5>according to equipment</h5></summary>
                            <div className="d-flex flex-column">
                                {equipmentList.map((item,index) => {
                                    return <div key={index}>
                                        <input className='btn curser-pointer mx-2 h5' type="checkbox" id='equipment' /><label className='h5' htmlFor="">{item}</label>
                                    </div>
                                })}</div>
                        </details>
                        <details className='list-none border border-2 m-2 border-danger  rounded p-2 bg-light'>
                            <summary className='border-bottom border-2 border-danger mb-2'><h5>according to target muscles</h5></summary>

                            <div className="d-flex flex-column">

                                {targetList.map((item,index) => {
                                    return <div key={index}>
                                        <input className='btn curser-pointer mx-2 h5' type="checkbox" id='target' /><label className='h5' htmlFor="">{item}</label>
                                    </div>
                                })}</div>
                        </details>
                        <div className="d-flex justify-content-center my-3 curser-pointer">
                            <button type='reset' className='btn mx-1 text-capitalize fw-semibold  btn-danger' data-bs-dismiss="offcanvas" onClick={() => {
                                setdata(allexercise)
                            }}>reset</button>
                            <button className='btn mx-1 text-capitalize fw-semibold  btn-danger' data-bs-dismiss="offcanvas">submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Allexercise;
