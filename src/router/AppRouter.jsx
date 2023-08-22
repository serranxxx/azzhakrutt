import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutApp } from '../layout/LayoutApp'
import { LoginPage } from '../auth/LoginPage'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/azzhakrutt/" element={<LoginPage />} />
      <Route path="/azzhakrutt/login" element={<LoginPage />} />
      <Route path="/azzhakrutt/*" element={
        <PrivateRoutes>
          <Routes>
            <Route path="main" element={<LayoutApp />} />
          </Routes>

        </PrivateRoutes>
      } />

    </Routes >
  )
}
