import {LOGIN, MINUS_POINT, PLUS_POINT, HIGHSCORE} from "../actions/types";
import {initialState} from "./initialState";


export const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case LOGIN:
            const name = action.payload;
            return {
                ...state,
                name: name
            }

        case MINUS_POINT:
            return {
                ...state,
                count: state.count -= 1
            }
        case PLUS_POINT:
            return {
                ...state,
                count: state.count += 3
            }
        case HIGHSCORE:
            return {
                ...state,
                highscore: state.count
            }
    }
};