import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-capitalize text-white">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold h1">gym trainer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center h5  m-auto mb-2 mb-lg-0">
                            <li className="nav-item m-auto mx-1">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item m-auto mx-1">
                                <Link to="/allexercises" className="nav-link">exercises</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search for any exercise" aria-label="Search" />
                            <button className="btn btn-outline-success"  type="submit"
                            >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;