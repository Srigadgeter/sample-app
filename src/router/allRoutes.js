// external imports
import React from 'react'

// internal imports
import PrivateRoutes from './privateRoutes'
import PublicRoutes from './publicRoutes'
import { getToken } from '../utils/localStorageUtils'

const AllRoutes = () => {
  const isAuthenticated = !!getToken()
  // have to check stored user data from redux store

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />
}

export default AllRoutes
