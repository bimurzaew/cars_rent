const initialState = {
    categories:[],
    loading:false
}

export const categoriesReducer = (state=initialState, action) => {
    switch (action.type){
        case "load/categories/fulfilled":
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export const loadCategories = () => {
    return async (dispatch) => {
        const response = await fetch("/categories");
        const json = await response.json();

        dispatch({type:"load/categories/fulfilled",payload:json})
    }
}

