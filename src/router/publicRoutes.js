// external imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// routes
import routes from './urls'

const PublicRoutes = () => (
    <Routes>
        {/* A List of Public Routes should be present here */}
        {/* 
            Example:
            --------
            <Route
                exact
                path={routes.LOGIN.path}
                element={<routes.LOGIN.component />}
            />
        */}
    </Routes>
)

export default PublicRoutes
