import React, { useContext, useState } from 'react';
import Bodyparts from './bodyparts';
import Equipment from './equipment';
import Muscles from './muscles';
import MyContext from '../api/context';
import { Search } from './search';

const Home = () => {
    const { toggleload } = useContext(MyContext)
    const [searchLowerCase, setsearch] = useState("")
    const [searchdata, setsearchdata] = useState([])
    const { data: { allexercise } } = useContext(MyContext)

    const handelsubmit = (e) => {
        e.preventDefault();
        toggleload()
        const searchdata = allexercise.filter((item) => {
            return item.name?.toLowerCase() === searchLowerCase ||
                item.bodyparts?.toLowerCase().includes(searchLowerCase) ||
                item.equipment?.toLowerCase().includes(searchLowerCase) ||
                item.id?.toLowerCase().includes(searchLowerCase) ||
                item.target?.toLowerCase().includes(searchLowerCase)

        })
        setsearchdata(searchdata);
        toggleload()
    }
    return (
        <div className="pb-5 text-responsive rounded text-capitalize">
            <div className="d-flex align-middle home">
                <div className="m-auto main d-flex w-50 h-50 rounded p-5 text-center">
                    <div className="m-auto">
                        <h1>sweet ,smile and repeat </h1><hr /><p>Train with Passion, Achieve Greatness</p>
                        <button className='btn btn-danger m-2 text-capitalize'><a href="#main" className='text-decoration-none text-light'>get started</a></button>

                    </div>
                </div>
            </div>
            <div className="my-4 py-2">
                <h1 className='text-center h2 my-4'>awesome exercises you should know</h1>
                <form onSubmit={(e) => handelsubmit(e)} className='d-flex '>
                    <input type="search" name='search' value={searchLowerCase} onChange={(e) => {
                        setsearch(e.target.value.toLowerCase())
                    }} className='text-dark p-3 m-2 rounded w-100' placeholder='Search your favirate exercise by name, bodyparts, equipment or target muscles' />
                    <button type='submit' className='btn btn-danger m-2 fw-semibold'>search</button>
                </form>
                <div className="bg-light rounded my-5 w-100">
                    {searchdata[0] && <div className="">
                        <Search exercise={searchdata} n={2} />
                    </div>}
                </div>
            </div>

            <div id='main' className="mx-2">
                <div className="my-4">
                    <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by bodyparts</h3>
                    <Bodyparts />
                </div>
                <div className="my-4">
                    <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by target muscles</h3>
                    <Muscles />
                </div>
                <div className="my-4">
                    <h3 className=' h2 m-auto my-4 border-2 border-bottom border-dark p-2'>search by equipment</h3>
                    <Equipment />
                </div>
            </div>
        </div>

    )
}

export default Home;
