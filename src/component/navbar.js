import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar py-3 navbar-expand-lg text-capitalize text-white">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand text-center"> <h1 className='title' htmlFor="">Unleashed Fitness</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center h4 text-dark g-5 m-auto  mb-2 mb-lg-0">
                            <li className="  mx-3">
                                <h4 >  <Link to="/"  className='text-dark'>Home</Link>
                                </h4>

                            </li>
                            <li className=" mx-3">
                            <h4 >  <Link to="/allexercises"  className='text-dark'>Exercises</Link>
</h4>
                            </li>
                            <li className="  mx-3">
                            <h4 ><Link to="/favourite" className='text-dark'>favourite</Link>
</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;