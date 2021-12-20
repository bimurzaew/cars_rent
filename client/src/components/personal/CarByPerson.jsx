import React from 'react'
import { putCar } from '../../redux/features/users'
import { useDispatch } from 'react-redux'

function CarByPerson ({user}) {
  const dispatch = useDispatch();

  return (
    user?.carRent &&
    <div className="card my-2 p-2" style={{ width: '13rem' }}>
      <img
        className="card-img-top h-1"
        src={user.carRent.image}
        alt="Card image cap"
      />
      <div>
        <b>Название</b>:
        {user.carRent.name}
      </div>
      <div>
        <b>Цена</b>:
        {user.carRent.price}
      </div>
      <div>
        <b>Название</b>:
        {user.carRent.desc}
      </div>
      <button
        onClick={()=> dispatch(putCar(user.carRent._id))}
        className="btn btn-dark mt-2">
        вернуть
      </button>
    </div>
  )
}

export default CarByPerson
