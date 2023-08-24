import React, { useReducer } from 'react'
import { AppReducer } from './appReducer'
import { types } from './types'
import { appContext } from './appContext'

const init = () => {

    return {
        USER: {
            name: '',
            full_name: '',
            celula: '',
            campo: '', 
            value: ''
        }
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const setUser = (name = '', full_name = '', celula = '', campo = '', value) => {
        const USER = {name, full_name, celula, campo, value}
        const action = {
            type: types.SET_TEAM,
            payload: USER
        }
        localStorage.setItem('USER', JSON.stringify(USER))
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
            setUser,
            setData_users, 
            login,
            logout
        }} >
            {children}
        </appContext.Provider>
    )
}
