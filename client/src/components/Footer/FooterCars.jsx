import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import style from "./footer.module.css";

function FooterCars () {
  return (
    <div className={'container-fluid '+style.footer}>
      <div className="row">
        <FooterTop/>
      </div>
      <div className="row">
        <FooterBottom/>
      </div>
    </div>
  )
}

export default FooterCars