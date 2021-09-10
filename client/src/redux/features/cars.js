const initialState = {
  cars: [],
  loading: false

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
        loading: true,
      };
    case "load/carsByCategories/fulfilled":
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };

    case "cars/receive/pending":
      return {
        ...state,
        loading: true,
      };
    case "cars/receive/fulfilled":
      return {
        ...state,
        cars: [action.payload],
        loading: false,
      };

    case "search/cars/pending":
      return {
        ...state,
        loading: true,
      };
    case "search/cars/fulfilled":
      return {
        ...state,
        cars: state.cars.filter((car) => {
          if(car.name.includes(action.payload.toUpperCase())) {
            return car;
          }
        }),
        loading: false
      };

    default:
      return state;
  }
};

export const loadCars = () => {
  return async (dispatch) => {
    const response = await fetch("/cars");

    const json = await response.json();

    dispatch({ type: "load/cars/fulfilled", payload: json });
  };
};

export const getCarsByID = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/cars/${id}`);
    const json = await response.json();
    dispatch({ type: "cars/receive/fulfilled", payload: json });
  };
};

export const getByCategories = (id) => {
  return async (dispatch) => {
    dispatch({ type: "load/carsByCategories/pending", payload: id });

    const response = await fetch(`/cars/category/${id}`);
    const json = await response.json();

    dispatch({ type: "load/carsByCategories/fulfilled", payload: json });
  };
};

export const searchCars = (cars) => {
  return async (dispatch) => {
    dispatch({ type: "search/cars/pending" });

    dispatch({ type: "search/cars/fulfilled", payload: cars });
  };
};
