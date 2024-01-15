import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/createuser", {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const { success } = response.data;

            if (!success) {
                alert("Invalid Credentials");
            }

            if (success) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
            <div style={{ border: "1px solid red", padding: "35px", borderRadius: "15px", width: "35vw" }}>
                <h1 className='mb-4'>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={handleOnChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleOnChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleOnChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input type="text" className="form-control" id="location" name="location" value={credentials.location} onChange={handleOnChange} />
                    </div>
                    <button type="submit" className="mt-2 btn btn-danger">Sign Up</button>
                    <div className='mt-4'>
                        <span>Already a User? <Link to='/login'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
