import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./footer.module.css"

function FooterTop () {
  return (
    <>
      <div className={'col-6 col-lg-4 text-center'}>
        <NavLink to="/about-us" className={style.about} activeClassName={style.aboutActive}>
          O нас
        </NavLink>
      </div>
      <div className={'col-6 col-lg-4 text-center'}>
        <NavLink to="/review" className={style.about} activeClassName={style.aboutActive}>
          Отзывы
        </NavLink>
      </div>
      <div className={'col-6 col-lg-4 text-center'}>
        <NavLink to="/contacts" className={style.about} activeClassName={style.aboutActive}>
          Контакты
        </NavLink>
      </div>
    </>
  )
}

export default FooterTop
