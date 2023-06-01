import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";


export const CakeView = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [restockvalue , setRestockvalue] = useState("")
    return (
        <>
            <h2>Number of Cakes available { numOfCakes } </h2>
            <button className="orderbtn" onClick={() => {dispatch(ordered(1))}}>Order</button>
            <input 
            type="number" 
            value={restockvalue}
            onChange={(e) => setRestockvalue(parseInt(e.target.value))}
            placeholder="cakes to restock"
            />
            <button className="restockbtn" onClick={() => {dispatch(restocked(restockvalue))}}>Restock</button>
        </>
    )
}

