import React from 'react';
import Bodyparts from './bodyparts';
import Equipment from './equipment';
import Muscles from './muscles';
const Home = () => {
    return (
        <>
            <div className="container shadow-lg main rounded my-4 py-5 text-capitalize">
                <div className="row m-2">
                    <div className="my-auto w-50 col">
                        <h1>sweet ,smile and repeat </h1><p>Train with Passion, Achieve Greatness</p>
                        <button className='btn btn-danger m-2 text-capitalize'><a href="#main" className='text-decoration-none text-dark'>get started</a></button>
                    </div>
                    <img className='w-50 my-auto col rounded img-fluid' src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="gym trainer" />
                </div>
                <div className="my-5 z-1 m-3">
                    <h1 className='text-center h2 my-5'>awesome exercises you should know</h1>
                </div>
                <div id='main' className="container">
                    <div className="my-3">
                        <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by bodyparts</h3>
                        <div className="container">
                            <Bodyparts />
                        </div>
                    </div>
                    <div className="my-3">
                        <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by target muscles</h3>
                        <div className="container">
                            <Muscles />
                        </div>
                    </div>
                    <div className="my-3">
                        <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by equipment</h3>
                        <div className="container">
                            <Equipment />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
