import { SET_LANGUAGE, TOGGLE_DARK_MODE } from "./actions";


export const initialState = {
    darkMode: false,
    language: "tr"
};


export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
            
        default:
            return state;
    }
}