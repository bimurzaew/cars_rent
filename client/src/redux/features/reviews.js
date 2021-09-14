const initialState = {
  recall: [],
  loading: null,
  error: null,
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
        error: action.payload.error,
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
        error: false,
      };
    case "review/add/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "review/add/fulfilled":
      return {
        ...state,
        loading: false,
        recall: [...state.recall, action.payload],
        error: false,
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
      dispatch({ type: "reviews/load/rejected", payload: json });
    } else {
      dispatch({ type: "reviews/load/fulfilled", payload: json });
    }
  };
};
export const addReview = (text) => {
  return async (dispatch, getState) => {
    dispatch({ type: "review/add/pending" });
    const state = getState();
    const response = await fetch("/review", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
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
