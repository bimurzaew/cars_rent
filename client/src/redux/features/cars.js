const initialState = {
  cars:[],
  loading:false
}

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    default:x 
=======
    case "load/cars/fulfilled":
      return {
        ...state,
        cars: action.payload
      }
    default:
>>>>>>> Dukvakha
      return state
  }
}

export const loadCars = () => {
  return async (dispatch) => {
    const response = await fetch("/cars");
    const json = await response.json();

    dispatch({type:"load/cars/fulfilled",payload:json})
  }
}