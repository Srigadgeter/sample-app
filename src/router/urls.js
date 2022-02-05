import { lazy } from 'react'

// Pages import
const Login = lazy(() => import('../pages/LoginPage'))
const HomePage = lazy(() => import('../pages/HomePage'))

const routes = {
    LOGIN: {
        path: '/login',
        to: () => '/login',
        component: Login
    },
    HOME: {
        path: '/home',
        to: () => '/home',
        component: HomePage
    }
}

export default routes
