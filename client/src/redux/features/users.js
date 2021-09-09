const initialState = {
  candidate: localStorage.getItem("candidate"),
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
        loading: true,
      };
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
        token: action.payload.token,
        candidate: action.payload.candidate,
      };
    // case "user/load/pending":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case "user/load/rejected":
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   };
    // case "user/load/fulfilled":
    //   return {
    //     ...state,
    //     loading: false,
    //     user: action.payload.candidate,
    //   };
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
    dispatch({ type: "user/signIn/pending" });
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/signIn/rejected", error: json.error });
    } else {
      dispatch({ type: "user/signIn/fulfilled", payload: [json] });

      localStorage.setItem("token", json.token);
      localStorage.setItem("candidate", JSON.stringify(json.candidate));
    }
  };
};

// export const getUser = () => {
//   return async (dispatch) => {
//     dispatch({ type: "user/load/pending" });
//
//     const response = await fetch(user/profile, {
//     headers: {
//       "Authorization":json.token
//     }
//     });
//     const json = await response.json();
//     if (json.error) {
//       dispatch({ type: "user/load/rejected", error: json.error });
//     } else {
//       dispatch({ type: "user/load/fulfilled", payload: json });
//     }
//   };
// };