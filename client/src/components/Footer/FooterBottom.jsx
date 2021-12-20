import React from "react";
import style from './footer.module.css';

function FooterBottom() {
  return (
    <>
      <div className={"col-xxl col-sm-12 col-md-6 col-lg-4 my-2 mx-auto text-center"}>
        <p className={style.copyright}>
          Copyright © INTOCODE (Прокат авто) 2021
          <br/> Все права защищены
        </p>
      </div>
      <div className={"col-xxl col-sm-12 col-md-6 col-lg-5 my-2 mx-auto text-center"}>
        <img className={style.image} src="https://prostoprokat.ru/upload/medialibrary/477/477523c8ee633564ef1892dbb69997eb.png" alt=""/>
        <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt=""/>
        <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png" alt=""/>
      </div>
    </>
  );
}

export default FooterBottom;
