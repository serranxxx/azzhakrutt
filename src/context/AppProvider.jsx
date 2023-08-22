import React, { useReducer } from 'react'
import { AppReducer } from './appReducer'
import { types } from './types'
import { appContext } from './appContext'

const init = () => {

    return {
        team: ''
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const setTeam = (team = '') => {
        const Team = team
        const action = {
            type: types.SET_TEAM,
            payload: Team
        }
        localStorage.setItem('team', JSON.stringify(Team))
        dispatch(action)
    }

    const setData_users = (users = []) => {
        const Data = users
        const action = {
            type: types.USERS,
            payload: Data
        }
        localStorage.setItem('data_users', JSON.stringify(Data))
        dispatch(action)
    }

    const login = (user) => {
        const action = {
            type: types.login,
        }
        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <appContext.Provider value={{
            ...state,
            setTeam,
            setData_users, 
            login,
            logout
        }} >
            {children}
        </appContext.Provider>
    )
}
