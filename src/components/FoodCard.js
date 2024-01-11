import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer'

const FoodCard = (props) => {

    let options = props.options
    let priceOptions = Object.keys(options)

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const priceRef = useRef()

    let dispatch = useDispatchCart()
    let data = useCart()

    const handleAddToCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item
                break
            }
        }

        if (food.length !== 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    }

    let finalPrice = qty * parseInt(options[size])

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card border-danger mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title fs-4">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-danger' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-danger' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((item) => {
                                return <option key={item} value={item}>{item}</option>
                            })}
                        </select>
                        <div className="d-inline fs-5 fw-bold h-100 ms-2">
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-danger text-white justify-center ms-2' onClick={handleAddToCart} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
