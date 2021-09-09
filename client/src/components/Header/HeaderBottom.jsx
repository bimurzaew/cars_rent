import React from 'react';
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getByCategories, loadCars, searchCars } from "../../redux/features/cars";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  search: {
    margin: "15px",
    backgroundColor: "white"
  }
})


function HeaderBottom() {

    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleGetByCategories = (id) => {
        dispatch(getByCategories(id))
    }

    const handleLoadCars = () => {
        dispatch(loadCars())
    }
    const handleSearch = (e) => {
      dispatch(searchCars(e.target.value))
    }

    return (
        <>

            <div className="main-nav">
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
                            <NavLink to={`/cars/category/${item._id}`}>
                                {item.name}
                            </NavLink>
                        </p>
                    </div>

                )
            })}
              <TextField
                onChange={handleSearch}
                className={classes.search}
                label="Поиск"
                type="search"
                variant="filled"
              />
            </div>
        </>
    );
}

export default HeaderBottom;