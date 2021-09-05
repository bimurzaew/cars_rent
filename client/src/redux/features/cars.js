const initialState = {
  cars: [],
  loading: false,
};

export default function cars(state = initialState, action) {
  switch (action.type) {
    case "load/cars/fulfilled":
      return {
        ...state,
        cars: action.payload
      }
    default:
      return state;
  }
}

