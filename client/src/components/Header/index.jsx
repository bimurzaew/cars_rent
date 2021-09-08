import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/features/categories";
import "./header_styles.css";
import HeaderBottom from "./HeaderBottom";

import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <header>
      <div className="header-blog">
        <div className="container">
          <div className="head-top">
            <div className="row text-center">
              <div className="col">
                <img className="logo-company" src={logo} />
              </div>
              <div className="col">
                <div className="head-tel">
                  <a
                    href="tel:+79284781016"
                    target="whatsapp"
                    className={"tel"}
                  >
                    +7(928) 478-10-16
                  </a>
                </div>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      ></path>
                    </svg>
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
