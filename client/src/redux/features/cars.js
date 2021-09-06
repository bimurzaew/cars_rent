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
    default:
      return state;
  }
};
