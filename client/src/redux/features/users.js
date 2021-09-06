const initialState = {
  loading: false,
  error: null,
  message: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "user/signup/pending":
      return {
        ...state,
        loading: true,
        error:null
      }
    case 'user/signup/fulfilled':
      return {
        ...state,
        loading: false,
        error:null,
        message: action.message
      }
    case 'user/signup/rejected':
      return {
        ...state,
        error:action.error,
        message: false
      }
    default:
      return state;
  }
}

export const registerUser = ({ login, password,lastName, name }) => {
  return async (dispatch) => {
    dispatch({ type: "user/signup/pending" });
    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ login, password,lastName, name }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/signup/rejected", error:json.error });
    } else {
      dispatch({ type: "user/signup/fulfilled",message:json.message});
    }
  };
};
