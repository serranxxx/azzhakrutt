

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { appContext } from '../context/appContext'

export const PrivateRoutes = ({ children }) => {

    const { logged } = useContext( appContext)
  return (logged)
    ? children
    : <Navigate to="/azzhakrutt/login"/>
}
