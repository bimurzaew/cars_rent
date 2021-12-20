import React, { useEffect, useState } from "react";
import CarsCarousel from "./CarsCarousel";
import style from "./car.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putCar, rentCar } from "../../../redux/features/users";
import { useParams } from "react-router-dom";
import { Slider } from '@material-ui/core'

function Car({ car }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.users);
  const [value, setValue] = useState(1);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="row">
        <CarsCarousel
          img1={car.imgCar1}
          img2={car.imgCar2}
          img3={car.imgCar3}
          name={car.name}
        />
      </div>
      <div className="row bg-light p-md-5 ">
        <div className="col-lg-8">
          <h2 className={'my-2 text-lg-start text-md-start text-center'}>{car.name}</h2>
          <h4 className={'my-2 text-lg-start text-md-start text-center'}>Укажите срок аренды в днях</h4>
          <div className='w-75 d-flex justify-content-between mt-lg-5 mx-lg-0 mx-md-0 mx-auto'>
            <span>{value * car.price} ₽</span>
           <span>/ Сутки:{value}</span>
          </div>
            <Slider
              className={'text-danger w-75 d-block mx-lg-0 mx-md-0 mx-auto'}
              step={1}
              marks
              min={1}
              max={10}
              onChange={(e, newValue) => setValue(newValue)}
            />
          <p className={style.description + " my-5"}>
                 {car.detailedDescription}
          </p>
        </div>
        <div className="col-lg-4">
          <div
            key={car._id}
            className="card mx-auto rounded-3 px-2"
            style={{ width: "18rem" }}
          >
            <h4 className="text-center p-2">Мой заказ</h4>
            <div className="h-100 d-inline-block text-center">
              <img
                src={car.image}
                className={style.car_img}
                alt=""
                style={{ height: 170 }}
              />
            </div>
            <div className={"card-body rounded-3 p-2"}>
              <h6 className="card-title">{car.name}</h6>
              <div className="card-title">
                <b>Год выпуска</b>:{car.year}₽
              </div>
              <div className="card-title">
                <b>Двигатель</b>:{car.desc}
              </div>
              <div className="card-title">
                <b>{car.price}</b>/в сутки
              </div>
              <h4>
                <span className={"text-danger"}>Итого:</span>
                {car.price * value} ₽
              </h4>
            </div>
            {user?.carRent?._id === id ?
              <button
                className="btn btn-secondary mb-2"
                onClick={() => dispatch(putCar(car._id))}
              >
                вернуть
              </button> :
              <button
                className="btn btn-primary mb-2"
                onClick={() => dispatch(rentCar(car._id))}
                disabled={!car.amount || user?.carRent || !user}
              >
                {car.amount === 0
                  ? "нет свободных машин"
                  : user?.carRent
                  ? "у вас есть машина"
                  : !user
                  ? "вы не авторизованы"
                  : "арендовать"}
              </button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Car;
