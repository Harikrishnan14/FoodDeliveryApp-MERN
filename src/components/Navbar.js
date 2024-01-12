import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import Modal from '../Modal'
import Cart from '../Pages/Cart'
import { useCart } from './ContextReducer'

const Navbar = () => {

    let navigate = useNavigate()
    let data = useCart()

    const [cartView, setCartView] = useState(false)

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
                                    <Link className="nav-link active" to="/myorders">My Orders</Link>
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
                                <div className='btn bg-white text-danger fw-bold mx-1' onClick={() => setCartView(true)}>
                                    My Cart
                                    {data.length === 0 ? "" : <Badge className='ms-2' pill bg="secondary">{data.length}</Badge>}
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}> <Cart /> </Modal> : null}
                                <div className='btn bg-white text-danger fw-bold mx-1' onClick={handleLogout}>Logout</div>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
