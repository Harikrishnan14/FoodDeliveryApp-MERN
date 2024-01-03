import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FoodCard from '../components/FoodCard'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="m-3">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home
