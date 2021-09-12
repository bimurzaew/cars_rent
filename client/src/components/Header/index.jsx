import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import "./header_styles.css";
import HeaderBottom from "./HeaderBottom";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/features/users";
import logoExit from "./exit.png";
import Typical from "react-typical";

function Header(props) {
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
                <img className="logo-company" src={logo} />
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
                      <Link to="/">
                        <div className="exitPage" onClick={handleLogOut}>
                          <img className={"logoExit"} src={logoExit} alt="" />
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
