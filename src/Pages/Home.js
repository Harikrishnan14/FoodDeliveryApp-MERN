import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FoodCard from '../components/FoodCard'

const Home = () => {

    const [foodCategory, setFoodCategory] = useState([])
    const [foodItem, setFoodItem] = useState([])
    const [search, setSearch] = useState("")

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json()
        // console.log(response[0], response[1]);

        setFoodItem(response[0]);
        setFoodCategory(response[1])
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <Navbar />
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>

                        <div className="carousel-caption" style={{ zIndex: "3" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                {/* <button className="btn btn-outline-danger text-white bg-danger" type="submit">Search</button> */}
                            </div>
                        </div>

                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900×700/?sandwich" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    foodCategory.length !== 0 ? foodCategory.map((data) => {
                        return (
                            <div className='row mb-3' key={data._id}>
                                <div className='fs-2 m-3 fw-bold'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {
                                    foodItem.length !== 0 ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map((filteredItems) => {
                                            return (
                                                <div key={filteredItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <FoodCard foodName={filteredItems.name}
                                                        options={filteredItems.options[0]}
                                                        image={filteredItems.img} />
                                                </div>
                                            )
                                        })
                                        : <div>No such Data Found</div>
                                }
                            </div>
                        )
                    }) : ""
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home
