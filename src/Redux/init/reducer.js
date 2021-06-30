import {
    CHANGE_THEME
} from './types'

const initialState = {
    theme: localStorage.getItem("theme"),
}

export default function initReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME :
            window.localStorage.setItem("theme", action.payload)
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}
