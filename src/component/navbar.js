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
                        <ul className="navbar-nav text-center h4 g-2  m-auto mb-2 mb-lg-0">
                            <li className="nav-item m-auto  mx-1">
                                <Link to="/" className="nav-link active h3" aria-current="page"><h4>Home</h4></Link>
                            </li>
                            <li className="nav-item m-auto mx-1">
                                <Link to="/allexercises" className="nav-link h4"><h4>Exercise</h4></Link>
                            </li>
                            <li className="nav-item m-auto mx-1">
                                <Link to="/favourite" className="nav-link h4"><h4>favourite</h4></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;