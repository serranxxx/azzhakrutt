import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'
import { LoginPage } from '../auth/LoginPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/azzhakrutt/*" element ={<LoginPage />} />
        <Route path="/azzhakrutt/login" element ={<LoginPage />} />
        <Route path="/azzhakrutt/main" element ={<LayoutApp />} />
        
    </Routes>
  )
}
