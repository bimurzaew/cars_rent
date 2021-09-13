import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getByBrands, getByCategories, loadCars} from "../../redux/features/cars";
import { Button, Popover } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { loadBrands } from "../../redux/features/brands";

const useStyles = makeStyles((theme) => ({
  typography: {
    // padding: 5,
    width:150,
    textAlign:"center",
    alignItems:"center"
  },
  popover:{
    position:"absolute",
    top:160
  },
  modal_logo: {
    width: 20,
    marginRight:5
  },
  modal_text:{
    display:"flex",
    alignItems:"center",
    margin:"auto",
    justifyContent:"center"
  }
}));

function HeaderBottom() {
  const classes = useStyles();
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.brands);

  console.log(brands);

  const dispatch = useDispatch();

  const handleGetByCategories = (id) => {
    dispatch(getByCategories(id));
  };
  const handleGetByBrands = (id) => {
    dispatch(getByBrands(id))
  }

  const handleLoadCars = () => {
    dispatch(loadCars());
  };

  const handleLoadBrands = () => {
    dispatch(loadBrands());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(loadBrands());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="main-nav">
        <div className="col">
          <p onClick={handleLoadCars} className="head-nav">
            <NavLink
              exact
              to="/"
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
        <div className="col">
          <div>
            <Button
              aria-describedby={id}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              По моделям
            </Button>
            <Popover
              id={id}
              className={classes.window_modal}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {brands.map((item) => {
                return (
                  <Typography className={classes.typography}>
                    <p
                      onClick={()=> handleGetByBrands(item._id)}
                    >
                      <NavLink to={`/cars/brand/${item._id}`}>
                       <div
                           className={classes.modal_text}
                       >
                         <img
                             className={classes.modal_logo}
                             src={item.logo}
                             alt=""
                         />
                         <span>{item.name}</span>
                       </div>
                      </NavLink>
                    </p>
                    <hr/>

                  </Typography>
                );
              })}
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;
