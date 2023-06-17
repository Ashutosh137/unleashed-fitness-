import React, { useState } from 'react';
import Bodyparts from './bodyparts';
import Exercise from './exercise';
import Equipment from './equipment';
import Allexercise from './allexercise';
const Home = () => {
    const [search, setsearch] = useState("");
    return (
        <>
            <div className="container my-5 pt-5 text-capitalize">
                <div className="row container">
                    <div className="my-auto w-50 col">
                        <h1>sweet ,smile and repeat </h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                        <button className='btn btn-danger m-2 text-capitalize'>get started</button>
                    </div>
                    <img className='w-50 my-auto col rounded img-fluid' src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="gym trainer" />
                </div>
                <div className="my-5 container row h5">
                    <h1 className='text-center h2  my-5'>awesome exercises you should know</h1>
                    <form className='d-flex' onSubmit={fetch}>
                        <input className='w-100  p-2' type="text" value={search} onChange={(e) => {
                            setsearch(e.target.value);
                        }} placeholder='your search exercise' />
                        <button type='submit' className='btn btn-danger border-bottom border-1 border-dark p-1 p-2'>Search</button>
                    </form>
                </div>
                <div className="container">
                    <Bodyparts/>
                </div>
    
            </div>
           
        </>
    )
}

export default Home;
