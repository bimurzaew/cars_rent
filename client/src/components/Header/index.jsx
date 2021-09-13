import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import style from "./header_styles.css";
import HeaderBottom from "./HeaderBottom";
import logo from "../../logo2.png";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../redux/features/users";
import Typical from "react-typical";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    fontSize:40,
    color:'antiquewhite'
  }
}))

function Header(props) {
  const classes = useStyles()
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header>
      <div className="header-blog">
        <div className="container-fluid">
          <div className="head-top">
            <div className="row text-center">
              <div className="col">
                <img className="logo-company" style={style.logoCompany} src={logo} />
              </div>
              <div className="col-6">
                <div className="head-tel">
                  Аренда
                  <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                      "эконом",
                      1000,
                      "среднего",
                      1000,
                      "бизнес",
                      1000,
                      "и VIP-класса автомобилей по всей РОССИИ!!",
                      1000,
                    ]}
                  />
                </div>
              </div>

              <div className="col">
                <div className="person">
                  <div className="person-text">
                    {token ? (
                      <NavLink  variant="body2" color="secondary" to="/personal">
                        <PermIdentityTwoToneIcon className={classes.avatar} />
                      </NavLink>
                    ) : (
                      <Link variant="body2" color="secondary" to="/signIn">
                        <PermIdentityTwoToneIcon className={classes.avatar} />
                      </Link>
                    )}
                  </div>
                  <div className="logo">

                    {token ? (
                      <Link to="/">
                        <div className="exitPage" onClick={handleLogOut}>
                         <ExitToAppTwoToneIcon className={classes.avatar}/>
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="head-bottom">
            <div className="row justify-content-around text-center">
              <HeaderBottom />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
