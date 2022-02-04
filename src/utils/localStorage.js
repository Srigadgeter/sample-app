import { AUTH_TOKEN } from './constants'

export const getToken = () => localStorage.getItem(AUTH_TOKEN)

export const getItemFromLocalStorage = key => localStorage.getItem(key)
