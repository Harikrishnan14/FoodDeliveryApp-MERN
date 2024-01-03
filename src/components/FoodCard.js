import React from 'react'

const FoodCard = () => {
    return (
        <div>
            <div className="card border-danger mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-2">Card title</h5>
                    <p className="card-text">Description</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-danger'>
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-danger'>
                            <option value="quarter">Quarter</option>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline fw-bold h-100">
                            Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
