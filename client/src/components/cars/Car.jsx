import React from "react";
import { NavLink } from "react-router-dom";
import style from './cars.module.css'

function Car({ car }) {

  return (
    <div key={car._id} className="col-xxl col-sm-12 col-md-6 col-lg-4 my-2">
      <div key={car._id} className="card m-auto rounded-3 px-2" style={{width: "18rem"}}>
        <div className='h-100 d-inline-block'>
          <img src={car.image} className="card-img-top" alt="" style={{height:170}}/>
        </div>
        <div className={'card-body rounded-3 ' + style.button}>
          <h6 className="card-title">{car.name}</h6>
          <p>
            <b>Двигатель</b>:{car.desc}
          </p>
          <p className="card-title">
            <b>Цена</b>:{car.price}₽
          </p>
        </div>
        <NavLink to={`/cars/${car._id}`} className={"btn btn-primary d-block my-2 mx-auto"}>
          Подробнее
        </NavLink>
      </div>
    </div>
  );
}

export default Car;
