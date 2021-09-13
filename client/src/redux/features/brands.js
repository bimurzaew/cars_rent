const initialState = {
    brands: [],
    loading:false
}

export const brandsReducer = (state=initialState, action) => {
    switch (action.type){
        case "load/brands/fulfilled":
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state
    }
}

export const loadBrands = () => {
    return async (dispatch) => {
        const response = await fetch("/brands");
        const json = await response.json();
        console.log(json);
        dispatch({type:"load/brands/fulfilled",payload:json})
    }
}

