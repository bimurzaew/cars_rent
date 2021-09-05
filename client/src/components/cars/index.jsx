import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCars} from "../../redux/features/cars";

function Cars(props) {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);


    useEffect(()=>{
        dispatch(loadCars())
    },[])
    return (
        <>
        <div className="container">
            <div className="row">
                {cars.map(item => item.name)}
            </div>
        </div>
        </>
    );
}

export default Cars;