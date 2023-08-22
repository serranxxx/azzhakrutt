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

        case types.login:
            return {
                ...state,
                logged: true,
            }

        case types.logut:
            return {
                logged: false
            }
        default:
            break;
    }
}
