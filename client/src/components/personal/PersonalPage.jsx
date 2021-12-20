import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccount, getUser } from '../../redux/features/users'
import CarByPerson from './CarByPerson'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { useHistory } from 'react-router-dom'

function PersonalPage () {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.users);

  useEffect(()=>{
    dispatch(getUser())
  },[]);

  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push('/');
  }

  return (
    <div className={'container my-2 min-vh-100'}>
      <div className="row">
        <div className="col-xxl col-sm-12 col-md-6 col-lg-4 my-2">
          <div className="card">
            <img
              className="card-img-top w-50 mx-auto"
              src={'https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg'}
              alt="Card image cap"
            />
              <div className="card-body">
                <button className="btn btn-primary w-100">
                  редактировать
                </button>
              </div>
          </div>
        </div>
        <div className="col-xxl col-sm-12 col-md-6 col-lg-8 my-2">
            <div className="card p-3">
              <h1>
                {user?.name} {user?.lastName}
              </h1>
              <div className='my-3'>
                <b>Контакты</b>:{user?.number}
              </div>
              <div className='my-3'>
                <b>Почта</b>:{user?.mail}
              </div>
              <button
                onClick={handleDelete}
                className={"btn btn-danger  d-block w-auto w-50 align-self-lg-end"}>
                  Удалить Аккаунт
                <MdDelete/>
              </button>
              <hr/>
              {
                user?.carRent
                ? <>
                    <h4>Арендованная машина</h4>
                    <CarByPerson user={user}/>
                  </>
                  : <h4>Арендованных машин нет</h4>
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalPage
