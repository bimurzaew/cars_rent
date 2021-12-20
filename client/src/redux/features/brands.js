const initialState = {
    brands: [],
    loading:false
}

export const brandsReducer = (state=initialState, action) => {
    switch (action.type){
        case "load/brands/pending":
            return {
                ...state,
                loading: true
            }
        case "load/brands/fulfilled":
            return {
                ...state,
                brands: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const loadBrands = () => {
    return async (dispatch) => {
        dispatch({type:"load/brands/pending"})
        const response = await fetch("/brands");
        const json = await response.json();

        dispatch({type:"load/brands/fulfilled",payload:json})
    }
}

