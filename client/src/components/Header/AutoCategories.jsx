import React, { useEffect } from 'react'
import { Toolbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../redux/features/categories'
import { NavLink } from 'react-router-dom'
import style from "./header.module.css"
import { getByBrands, getByCategories } from '../../redux/features/cars'
import { loadBrands } from '../../redux/features/brands'

function AutoCategories (props) {
  const { categories } = useSelector((state) => state.categories);
  const { brands, loading } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadCategories());
  },[]);
  useEffect(()=>{
    dispatch(loadBrands());
  },[])

  const handleGetByCategories = (id) => {
    dispatch(getByCategories(id));
  };

  const handleGetByBrands = (id) => {
    dispatch(getByBrands(id));
  };

  return (
   <>
     <Toolbar/>
     <nav
       className="navbar navbar-expand-sm navbar-light bg-light bg-opacity-10"
     >
       <div className="container-fluid">
         <div className="dropdown">
           <button className="btn btn-primary dropdown-toggle"
                   type="button" id="dropdownMenuButton1"
                   data-bs-toggle="dropdown" aria-expanded="false">
             Марки авто
           </button>
           <ul className="dropdown-menu"
               aria-labelledby="dropdownMenuButton1">
             {
               brands.map(brand => {
                 return (
                   <li
                     key={brand._id}
                   >
                     <NavLink
                       onClick={()=> handleGetByBrands(brand._id)}
                       className="dropdown-item d-flex align-items-center"
                       to={`/cars/brand/${brand._id}`}>
                       <img src={brand.logo} alt="" className="w-25 rounded-circle"/>
                       <span className='p-1'>
                         {brand.name}
                       </span>
                     </NavLink>
                   </li>
                 )
               })
             }
           </ul>
         </div>
         <div className="collapse navbar-collapse ali" id="navbarTogglerDemo02">
           <ul className="navbar-nav m-auto mb-lg-0 al">
             {categories.map(category => {
               return(
                 <li key={category._id} className="nav-item">
                   <NavLink
                     className={`nav-link text-danger mx-2 p-2 `+style.link}
                     activeClassName={'bg-light bg-opacity-50 rounded'}
                     aria-current="page"
                     onClick={()=> handleGetByCategories(category._id)}
                      to={`/cars/category/${category._id}`}>
                     {category.name}
                   </NavLink>
                 </li>
               )
             })
             }
           </ul>
         </div>
         <button className="navbar-toggler" type="button"
                 data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                 aria-controls="navbarTogglerDemo02" aria-expanded="false"
                 aria-label="Переключатель навигации">
           <span className="navbar-toggler-icon"/>
         </button>
       </div>

     </nav>

   </>
  )
}

export default AutoCategories