// external imports
import React from 'react'
import {
    Route,
    Routes,
} from 'react-router-dom'

// routes
import routes from './urls'

const PrivateRoutes = () => (
    <Routes>
        {/* A List of Private Routes should be present here */}
        {/* 
            Example:
            --------
            <Route
                exact
                path={routes.HOME.path}
                element={<routes.HOME.component />}
            />
        */}
    </Routes>
)

export default PrivateRoutes
