import React from 'react';
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getByCategories, loadCars} from "../../redux/features/cars";

function HeaderBottom() {
    const { categories } = useSelector((state) => state.categories);

    const dispatch = useDispatch()

    const handleGetByCategories = (id) => {
        dispatch(getByCategories(id))
    }

    const handleLoadCars = () => {
        dispatch(loadCars())
    }

    return (
        <>
            <div className="col">
                <p onClick={handleLoadCars}  className="head-nav">
                    <NavLink exact to="/">
                        Главная
                    </NavLink>
                </p>
            </div>
            {categories.map(item => {

                return(

                    <div className="col">
                        <p className="head-nav" onClick={ () => handleGetByCategories(item._id)}>
                            <NavLink to={`/cars/${item._id}`}>
                                {item.name}
                            </NavLink>
                        </p>
                    </div>

                )
            })}

        </>
    );
}

export default HeaderBottom;