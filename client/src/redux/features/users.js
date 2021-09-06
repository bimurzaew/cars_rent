const initialState = {
  loading:false,
  error:null,
  message:null,
  token:null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'user/signup/pending':
      return {
        ...state,
        loading: false,
        error:null
      }
    case 'user/signup/rejected':
      return {
        ...state,
        loading: false,
        error:action.error,
        message: false
      }
    case 'user/signup/fulfilled':
      return {
        ...state,
        loading:false,
        message:true
      }
    default:
      return state
  }
}

export const registerUser = (login, password) => {
  console.log(login, password)
  return async (dispatch) => {
    dispatch({ type: "users/signup/pending" });

    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "users/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "users/signup/fulfilled", error: json });
    }
};




}