import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../redux/features/cars';
import Car from './Car'
import LoadingRentCar from './CarById/LoadingRentCar'

function Cars () {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);

  useEffect(()=>{
    dispatch(loadCars())
  },[])

  return (
    <div className="container">
      <div className="row">
          {
           loading ? <LoadingRentCar/>
             :cars.map(car => {
              return(
                <Car key={car._id} car={car}/>
              )
            })
          }
      </div>
    </div>
)
}

export default Cars
