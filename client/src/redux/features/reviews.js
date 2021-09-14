const initialState = {
  recall: null,
  loading: null,
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "reviews/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "reviews/load/rejected":
      return {
        ...state,
        rError: action.payload.error,
      };
    case "reviews/load/fulfilled":
      return {
        ...state,
        loading: false,
        recall: action.payload,
      };
    case "review/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "review/add/rejected":
      return {
        ...state,
        rError: action.payload.error,
      };
    case "review/add/fulfilled":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export const getReviews = () => {
  return async (dispatch) => {
    dispatch({ type: "reviews/load/pending" });
    const response = await fetch("/reviews");
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "reviews/load/rejected", payload: json.error });
    } else {
      dispatch({ type: "reviews/load/fulfilled", payload: json });
    }
  };
};
export const addReview = ( text ) => {
  return async (dispatch, getState) => {
    dispatch({ type: "review/add/pending" });
    const state = getState();
    const response = await fetch("/review", {
      method: "POST",
      body: JSON.stringify({ text } ),
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "review/add/rejected", payload: json.error });
    } else {
      dispatch({ type: "review/add/fulfilled", payload: json });
    }
  };
};
