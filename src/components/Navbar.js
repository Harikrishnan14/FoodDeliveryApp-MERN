import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fst-italic fw-bold" to="/">QuickBite</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-bold me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">My Orders</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className="d-flex">
                                <Link className="btn bg-white text-danger fw-bold mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-danger fw-bold mx-1" to="/signup">Sign Up</Link>
                            </div>
                            :
                            <div>
                                <div className='btn bg-white text-danger fw-bold mx-1'>My Cart</div>
                                <div className='btn bg-white text-danger fw-bold mx-1' onClick={handleLogout}>Logout</div>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
