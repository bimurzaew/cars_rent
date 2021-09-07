const initialState = {
  loading: false,
  error: null,
  message: null,
  token: localStorage.getItem("token"),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "user/signup/pending":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "user/signup/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        message: action.message,
      };
    case "user/signup/rejected":
      return {
        ...state,
        error: action.error,
        message: false,
      };
    case "user/signIn/pending":
      return {
        ...state,
        loading: true
      }
    case "user/signIn/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "user/signIn/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        token:action.payload.token
      };
    default:
      return state;
  }
}

export const registerUser = ({ login, password, lastName, name }) => {
  return async (dispatch) => {
    dispatch({ type: "user/signup/pending" });
    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ login, password, lastName, name }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "user/signup/fulfilled", message: json.message });
    }
  };
};

export const auth = ({ login, password }) => {
  return async (dispatch) => {
    dispatch({ type: "user/logIn/pending" });
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/logIn/rejected", error: json.error });
    } else {
      dispatch({ type: "user/logIn/fulfilled", payload: json });

      localStorage.setItem("token", json.token);
    }
  };
};
