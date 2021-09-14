const initialState = {
  user: null,
  loading: false,
  regError: null,
  authError: null,
  message: null,
  car: null,
  token: localStorage.getItem("token"),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "user/signup/pending":
      return {
        ...state,
        loading: true,
        regError: null,
      };
    case "user/signup/fulfilled":
      return {
        ...state,
        loading: false,
        regError: null,
        message: action.payload.message,
      };
    case "user/signup/rejected":
      return {
        ...state,
        regError: action.regError,
        message: false,
      };
    case "user/signIn/pending":
      return {
        ...state,
        loading: true,
      };
    case "user/signIn/rejected":
      return {
        ...state,
        loading: false,
        authError: action.authError,
      };
    case "user/signIn/fulfilled":
      return {
        ...state,
        loading: false,
        authError: null,
        token: action.payload.token,
      };
    case "user/rent/pending":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "user/rent/fulfilled":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        message: action.message,
        user: {
          ...state.user,
          carRent: action.payload.carRent
        }
      };
    case "user/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "user/load/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "user/load/fulfilled":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "user/logout/fulfilled":
      return {
        ...state,
        token: null,
      };
    case "user/put/pending":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "user/put/rejected":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "user/put/fulfilled":
      return {
        ...state,
        loading: false,
        user: { ...state.user, carRent: null }
      };
    default:
      return state;
  }
}

export const registerUser = ({ login, password, lastName, name, mail, number }) => {
  return async (dispatch) => {
    dispatch({ type: "user/signup/pending" });
    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ login, password, lastName, name, mail, number }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.regError) {
      dispatch({ type: "user/signup/rejected", regError: json.regError });
    } else {
      dispatch({ type: "user/signup/fulfilled", payload: json });
    }
  };
};

export const auth = ({ login, password }) => {
  return async (dispatch) => {
    dispatch({ type: "user/signIn/pending" });

    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.authError) {
      dispatch({ type: "user/signIn/rejected", authError: json.authError });
      throw new Error(json.authError);
    } else {
      dispatch({ type: "user/signIn/fulfilled", payload: json });

      localStorage.setItem("token", json.token);

    }
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "user/load/pending" });
    const state = getState();
    const response = await fetch("/user/profile", {
      headers: {
        method: "GET",
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/load/rejected", error: json.error });
    } else {
      dispatch({ type: "user/load/fulfilled", payload: json });
    }
  };
};

export const rentCar = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "user/rent/pending" });
    const response = await fetch(`/cars/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${state.users.token}` },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/rent/rejected" });
    } else {
      dispatch({ type: "user/rent/fulfilled", payload: json });
    }
  };
};

export const putCar = (id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "user/put/pending" });
    const state = getState();
    const response = await fetch(`/car/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${state.users.token}` },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/put/rejected", error: json.error });
    } else {
      dispatch({ type: "user/put/fulfilled", payload:json });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: "user/logout/fulfilled" });
    localStorage.clear();
  };
};
