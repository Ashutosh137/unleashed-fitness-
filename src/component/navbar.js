import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-capitalize text-white">
                <div className="container-fluid">
                    <a href='#' className="navbar-brand text-center fw-bold h1">gym trainer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center h5  m-auto mb-2 mb-lg-0">
                            <li className="nav-item m-auto mx-1">
                                <Link to="/" className="nav-link active h4" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item m-auto mx-1">
                                <Link to="/allexercises" className="nav-link h4">exercises</Link>
                            </li>
                            <li className="nav-item m-auto mx-1">
                                <Link to="/favourite" className="nav-link h4">favourite</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;