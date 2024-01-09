import React from 'react'

const FoodCard = (props) => {

    let options = props.options
    let priceOptions = Object.keys(options)

    return (
        <div>
            <div className="card border-danger mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fs-4">{props.foodName}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-danger'>
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-danger'>
                            {priceOptions.map((item) => {
                                return <option key={item} value={item}>{item}</option>
                            })}
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
