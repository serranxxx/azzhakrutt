import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.SET_TEAM:
            return {
                ...state,
                team: action.payload
            }

        case types.USERS:
            return {
                ...state,
                data_users: action.payload
            }
        default:
            break;
    }
}
