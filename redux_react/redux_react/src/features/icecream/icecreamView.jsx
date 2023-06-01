import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
    const numofIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div className="icecreamView">
            <h2>Number of Icecreams available - { numofIcecreams } </h2>
            <button onClick={() => {dispatch(ordered(1))}}>Order</button>
            <button onClick={() => {dispatch(restocked(1))}}>Restock</button>
        </div>
    )
}

