import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getByCategories, loadCars } from "../../redux/features/cars";

function HeaderBottom() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleGetByCategories = (id) => {
    dispatch(getByCategories(id));
  };

  const handleLoadCars = () => {
    dispatch(loadCars());
  };

  return (
    <>
      <div className="main-nav">
        <div className="col">
          <p onClick={handleLoadCars} className="head-nav">
            <NavLink
                exact to="/"
                className="nav-link"
                activeClassName="nav-active"
            >
              Главная
            </NavLink>
          </p>
        </div>
        {categories.map((item) => {
          return (
            <div className="col">
              <p
                className="head-nav"
                onClick={() => handleGetByCategories(item._id)}
              >
                <NavLink
                  className="nav-link"
                  to={`/cars/category/${item._id}`}
                  activeClassName="nav-active"
                >
                  {item.name}
                </NavLink>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HeaderBottom;
