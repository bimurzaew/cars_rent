const initialState = {
  cars: [],
  loading: false,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/cars/fulfilled":
      return {
        ...state,
        cars: action.payload,
      };
    case "load/carsByCategories/pending":
      return {
        ...state,
        loading:true
      }
    case "load/carsByCategories/fulfilled":
      return {
        ...state,
        cars: action.payload,
        loading: false
      }
    default:
      return state;
  }

};

export const loadCars = () => {
  return async (dispatch) => {
    const response = await fetch("/cars");

    const json = await response.json();

    dispatch({type:"load/cars/fulfilled",payload:json});
  }
}


export const getByCategories = (id) =>{
  return async (dispatch) => {
    dispatch({type:"load/carsByCategories/pending",payload:id})

    const response = await fetch(`/cars/${id}`);
    const json = await response.json();

    dispatch({type:"load/carsByCategories/fulfilled",payload:json})
  }
}


