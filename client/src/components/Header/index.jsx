import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import "./header_styles.css";
import HeaderBottom from "./HeaderBottom";

import { Icon, makeStyles } from "@material-ui/core";

import logo from "../../logo.svg";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <header>
      <div className="header-blog">
        <div className="container-fluid">
          <div className="head-top">
            <div className="row text-center">
              <div className="col">
                <img className="logo-company" src={logo} />
              </div>
              <div className="col">
                <div className="head-tel"></div>
              </div>
              <div className="col">
                <a href="https://api.whatsapp.com/send/?phone=%2B79284781016&text&app_absent=0">
                  <img
                    src="	https://prostoprokat.ru/upload/medialibrary/477/477523c8ee633564ef1892dbb69997eb.png"
                    alt=""
                    className="social"
                  />
                </a>
              </div>
              <div className="col">
                <div className="person">
                  <div className="person-text">
                    {token ? (
                      <Link variant="body2" color="secondary" to="/personal">
                        Личный кабинет
                      </Link>
                    ) : (
                      <Link variant="body2" color="secondary" to="/signIn">
                        Авторизоваться
                      </Link>
                    )}
                  </div>
                  <div className="logo">
                    {token ? (
                      <Link to='/'>
                      <Button
                        onClick={handleLogOut}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                      >
                        выход
                      </Button>
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
            <div className="row text-center">
              <HeaderBottom />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
